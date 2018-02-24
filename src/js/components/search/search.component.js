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
		
		constructor($log){
			'ngInject';
			this.$log = $log;
		}
		
		/**
		 * Invoked when the component is initialized.
		 */
		$onInit(){
			this.$log.debug('Search.$onInit()');
		}
	}
};

export { SearchComponent };