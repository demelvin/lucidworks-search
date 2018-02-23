'use strict';

import settings from '../../settings';

/**
 * @desc 
 * 
 * The home module configuration.
 * 
 * See {@link https://docs.angularjs.org/api/ng/type/angular.Module#config}.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 * 
 */
const HomeConfig = ($stateProvider) => {
	'ngInject';
	
	//configure home routes
	$stateProvider
	.state(settings.STATE.HOME, {
		url: '/',
		component: 'home',
		title: 'Home'
	});
	
};

export default HomeConfig;