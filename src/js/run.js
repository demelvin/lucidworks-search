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
	
	//TODO remove this
	
//	const HISTORY_TEST = [
//		{term: 'Wine Number One', query: 'wine-number-one', filter: 'reviews'},
//		{term: 'Wine Number Two', query: 'wine-number-two', filter: 'title'},
//		{term: 'Wine Number Three', query: 'wine-number-three', filter: 'reviews'},
//		{term: 'Wine Number Four', query: 'wine-number-four', filter: 'taster'},
//		{term: 'Wine Number Five', query: 'wine-number-five', filter: 'title'}
//	];
//	
//	const BOOKMARK_TEST = [
//		{term: 'Wine Number Six', query: 'wine-number-six', filter: 'reviews'},
//		{term: 'Wine Number Seven', query: 'wine-number-seven', filter: 'title'},
//		{term: 'Wine Number Eight', query: 'wine-number-eight', filter: 'reviews'},
//		{term: 'Wine Number Nine', query: 'wine-number-nine', filter: 'taster'},
//		{term: 'Wine Number Ten', query: 'wine-number-ten', filter: 'title'}
//	];
//	
//	localStorageService.set('history', HISTORY_TEST);
//	localStorageService.set('bookmarks', BOOKMARK_TEST);
//	
};

export default run;