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
		url: '/search/:category/:query/:page',
		component: 'search',
		params: {
            query: 'test',
            category: settings.CATEGORIES.ANY.name.toLowerCase(),
            page: '0'
        },
		title: 'Search'
	});
	
};

export default SearchConfig;