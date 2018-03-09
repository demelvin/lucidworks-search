'use strict';

import settings from '../../settings';
import fontawesome from '@fortawesome/fontawesome';
import faCertificate from '@fortawesome/fontawesome-free-solid/faCertificate';
import searchTemplate from './search.html';

//images
import whiteWineImage from '../../../images/wine-white.png';
import redWineImage from '../../../images/wine-red.png';

//add fonts
fontawesome.library.add(faCertificate);

/**
 * Search component definition. 
 * 
 * Responsible for displaying search results.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */
const SearchComponent = {
	replace: true,
	template: searchTemplate,
	controllerAs: 'search',
	controller: class SearchController {
		
		/**
		 * Creates a new SearchComponent.
		 */
		constructor(searchService, $state, $stateParams, $log){
			'ngInject';
			this.searchService = searchService;
			this.$log = $log;
			this.$state = $state;
			this.$stateParams = $stateParams;
			this.query = $stateParams.query;
			this.category = $stateParams.category;
			this.page = $stateParams.page;
			this.results = [];
			this.isSearching = false;
			this.searchFailed = false;
			this.whiteWineImage = whiteWineImage;
			this.redWineImage = redWineImage;
		}
		
		/**
		 * Invoked when the component is initialized.
		 */
		$onInit(){
			this.$log.debug('Search.$onInit(%o, %o)', this.query, this.category);
			if(this.query){
				//replace dashes with spaces again
				this.query = this.query.replace(/-/g, ' ');
				this.performSearch();
			} else {
				this.$log.warn('Cannot execute search. No query was provided.');
			}
		}
		
		/**
		 * Performs the search.
		 */
		performSearch(){
			this.isSearching = true;
			this.searchService.search(this.query, this.category, this.page)
			.then((result) => {
				this.result = result;
			}, (error) => {
				this.$log.error('Search Failed. An error was returned.', error);
				this.searchFailed = true;
			})
			['finally'](() => {
				this.isSearching = false;	
			});
		}
		
		/**
		 * Invoked when a search item is selected.
		 * 
		 * @param {Object} item the item that was selected
		 */
		itemSelected(item){
			this.$state.go(settings.STATE.REVIEW, {id: item.id});
		}
	}
};

export { SearchComponent };