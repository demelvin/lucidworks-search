'use strict';

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
		
		constructor($log){
			'ngInject';
			this.$log = $log;
		}
		
		/**
		 * Invoked when the component is initialized.
		 */
		$onInit(){
			this.$log.debug('SearchBar.$onInit()');
		}
	}
};

export { SearchBarComponent };