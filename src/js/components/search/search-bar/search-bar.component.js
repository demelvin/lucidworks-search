'use strict';

import settings from '../../../settings';
import searchTemplate from './search-bar.html';

/**
 * Search bar component definition. 
 * 
 * Responsible for displaying a search bar.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */
const SearchBarComponent = {
	replace: true,
	template: searchTemplate,
	controllerAs: 'searchBar',
	controller: class SearchBarController {
		
		constructor($state, sideNavService, $log){
			'ngInject';
			this.$state = $state;
			this.sideNavService = sideNavService;
			this.$log = $log;
			this.query = undefined;
			this.categories = Object.keys(settings.CATEGORIES);
			this.category = settings.CATEGORIES.ANY;
			this.showCategories = false;
		}
		
		/**
		 * Invoked when the component is initialized.
		 */
		$onInit(){
			this.$log.debug('SearchBar.$onInit()');
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
				let category = this.category.toLowerCase();
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
			if(category){
				this.category = category;	
			}
		}
	}
};

export { SearchBarComponent };