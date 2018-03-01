'use strict';

import settings from '../../../settings';
import searchBarTemplate from './search-bar.html';

/**
 * Search bar component definition. 
 * 
 * Responsible for displaying a search bar.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */
const SearchBarComponent = {
	replace: true,
	template: searchBarTemplate,
	controllerAs: 'searchBar',
	controller: class SearchBarController {
		
		constructor($state, $transitions, sideNavService, $log){
			'ngInject';
			this.$state = $state;
			this.$transitions = $transitions;
			this.sideNavService = sideNavService;
			this.$log = $log;
			this.query = undefined;
			this.categories = settings.CATEGORIES;
			this.category = settings.CATEGORIES.ANY;
			this.showCategories = false;
			this.listeners = [];
		}
		
		/**
		 * Invoked when the component is initialized.
		 */
		$onInit(){
			this.$log.debug('SearchBar.$onInit()');
			this.setupListeners();
		}
		
		/**
		 * Destroy listeners.
		 */
		$onDestroy() {
			//iterate over event listeners and destroy them
			for(let listener of this.listeners){
				listener();
			}
		}
		
		/**
		 * Setup the event listeners used to show/hide the 
		 * SideNavComponent.
		 */
		setupListeners() {
			
			/*
			 * Listen for successful transitions update query + category
			 * if its defined.
			 */
			let routeListener = this.$transitions.onSuccess({to: settings.STATE.SEARCH}, (transition) => {
				
				if(transition){
					let stateParams = transition.params();
					//query
					let query = stateParams.query;
					this.query = (!this.query ? query : this.query);
					//category
					let category = stateParams.category;
					this.category = (category ? settings.CATEGORIES[category.toUpperCase()] : settings.CATEGORIES.ANY);
				}
			});
			
			//add listener
			this.listeners.push(routeListener);
		}
		
		/**
		 * Invoked when the search button is selected
		 * or the enter/return key is hit.
		 * 
		 * Records history then kicks off the search.
		 */
		search(){
			if(this.query){
				//replace white spaces with dashes
				let query = this.query.replace(/\s+/g, '-').toLowerCase();
				let category = this.category.name.toLowerCase();
				//record in history
				this.sideNavService.addHistory(this.query, query, category);
				//transition kick off the search
				this.$state.go(settings.STATE.SEARCH, {query: query, category: category});
			}
		}
		
		/**
		 * Invoked when a category is selected.
		 * 
		 * Sets the search category.
		 * 
		 * @param {String} category the selected category
		 */
		updateCategory(category){
			if(category && category !== this.category){
				this.category = category;
				if(this.query){
					//kick off a new search
					this.search();
				}
			}
		}
	}
};

export { SearchBarComponent };