'use strict';

import settings from '../../settings';

/**
 * The search module configuration.
 * 
 * See {@link https://docs.angularjs.org/api/ng/type/angular.Module#config}.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 * 
 */
const SearchConfig = ($stateProvider) => {
	'ngInject';
	
	//configure search routes
	$stateProvider
	.state(settings.STATE.SEARCH, {
		url: '/search/:category/:query',
		component: 'search',
		params: {
            query: 'test',
            category: settings.CATEGORIES.ANY.toLowerCase()
        },
		title: 'Search'
	});
	
};

export default SearchConfig;