'use strict';

import searchTemplate from './search.html';

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
		
		constructor($stateParams, $log){
			'ngInject';
			this.$log = $log;
			this.$stateParams = $stateParams;
			this.query = $stateParams.query;
			this.category = $stateParams.category;
			this.results = [];
		}
		
		/**
		 * Invoked when the component is initialized.
		 */
		$onInit(){
			this.$log.debug('Search.$onInit(%o, %o)', this.query, this.category);
			if(this.query){
				//replace dashes with spaces again
				this.query = this.query.replace(/-/g, ' ');
			}
		}
		
		performSearch(){
			//TODO
		}
	}
};

export { SearchComponent };