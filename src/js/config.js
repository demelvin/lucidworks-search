'use strict';

import settings from './settings';
import localizedEnglish from '../i18n/localized-en.json';

/**
 * @desc 
 * 
 * The angular config function used to configure the application.
 * 
 * See {@link https://docs.angularjs.org/api/ng/type/angular.Module#config}.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 * 
 */
const AppConfig = ($qProvider, $httpProvider, $urlRouterProvider, $locationProvider, $translateProvider, localStorageServiceProvider, $logProvider, $compileProvider) => {
	'ngInject';
	
	const DEFAULT_ROUTE = '/';	
	const DEFAULT_LANG = 'en';
	const LOG_DEBUG_ENABLED = true;
	const TRANSLATE_SANITIZE_STRATEGY = 'escapeParameters';
	//FIXME Set this to true once we figure out why it doesn't work with webpack
	//https://github.com/webpack/docs/wiki/webpack-dev-server
	const HTML5_MODE = false;
	const CORS_ENABLED = true;
	
	////////////////////////////////////////////
	// Enable CORS Requests
	//
	// NOTE: This is necessary to hit the search API
	////////////////////////////////////////////
    $httpProvider.defaults.withCredentials = CORS_ENABLED;
	
	////////////////////////////////////////////
	// Routing Configuration
	////////////////////////////////////////////
	
	// If the user enters something that doesn't match any of our URL rules, then redirect them to the root:
	$urlRouterProvider.otherwise(DEFAULT_ROUTE);

	// use the HTML5 browser history
	$locationProvider.html5Mode({
		enabled: HTML5_MODE,
		requireBase: false
	});
	
	/*
	 * Unhandled rejection exception fix.
	 * 
	 * https://github.com/angular-ui/ui-router/issues/2889
	 */
	$qProvider.errorOnUnhandledRejections(false);
	
	
	////////////////////////////////////////////
	// Translation / Localization Configuration
	////////////////////////////////////////////
	
	$translateProvider.translations(DEFAULT_LANG, localizedEnglish);
	$translateProvider.preferredLanguage(DEFAULT_LANG);
	$translateProvider.useLocalStorage();
	$translateProvider.useSanitizeValueStrategy(TRANSLATE_SANITIZE_STRATEGY);
	
	////////////////////////////////////////////
	// Logging Configuration
	////////////////////////////////////////////
	$compileProvider.debugInfoEnabled(LOG_DEBUG_ENABLED);
	$logProvider.debugEnabled(LOG_DEBUG_ENABLED);
	
	//////////////////////////////////////////////
	// Local Storage Configuration
	/////////////////////////////////////////////
	localStorageServiceProvider.setPrefix(settings.LOCAL_STORAGE_PREFIX);
	
};

export default AppConfig;