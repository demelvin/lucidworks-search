'use strict';

import settings from '../../settings';

/**
 * @desc 
 * 
 * The review module configuration.
 * 
 * See {@link https://docs.angularjs.org/api/ng/type/angular.Module#config}.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 * 
 */
const ReviewConfig = ($stateProvider) => {
	'ngInject';
	
	//configure review routes
	$stateProvider
	.state(settings.STATE.REVIEW, {
		url: '/review',
		component: 'review',
		title: 'Review'
	});
	
};

export default ReviewConfig;