'use strict';

import settings from './settings';

/**
 * @desc 
 * 
 * The angular run module configuration. Kick starts the application after
 * it has been configured.
 * 
 * See {@link https://docs.angularjs.org/api/ng/type/angular.Module#run}.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */

const run = ($rootScope, $transitions, $http, $log) => {
	'ngInject';

	const DEFAULT_TITLE  = settings.APP_NAME;
	const TITLE_DELIMITER = ' | ';
	
	/**
	 * Listen for successful transitions and
	 * update the page title.
	 */
	$transitions.onSuccess(true, (transition) => {
		
		$rootScope.pageTitle = DEFAULT_TITLE;
		
		if(transition){
			const toState = transition.to();
			if (toState.title) {
				$rootScope.pageTitle += TITLE_DELIMITER + toState.title;
			}			
		}
	});
	
	
	/**
	 * Authenticate with the API.
	 * 
	 * {@link https://doc.lucidworks.com/fusion-server/4.0/reference-guides/api/authentication-and-authorization-apis/sessions-api.html}
	 */
	const auth = () => {
		const request = {
			method : 'POST',
			data: {
				username: settings.API.USERNAME,
				password: settings.API.PASSWORD
			},
			url : (settings.API.BASE_URL + settings.API.ENDPOINT.AUTH)
		};
		$http(request)
		.then((response) => {
			$log.debug('Authentication success! response: %o', response);
		}, (errorResponse) => {
			$log.error('Authentication Failed! An error was returned.', errorResponse);
		});
	};
	
	/*
	 * Authenticate 
	 * 
	 * NOTE: This is a quick 'n' dirty way. A intercepter should be used 
	 * to auto refresh the auth cookie upon request.
	 */
	auth();
	
};

export default run;