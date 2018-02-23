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

const run = ($rootScope, $transitions) => {
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
	
};

export default run;