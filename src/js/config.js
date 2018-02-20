'use strict';

import settings from './settings';
import localizedEnglish from '../i18n/localized-en.json';

/**
 * @desc 
 * 
 * The angular config function used to configure the application.
 * 
 * @author Derek R. Melvin (demelvin@gmail.com)
 */
const config = ($urlRouterProvider, $locationProvider, $translateProvider, localStorageServiceProvider, $logProvider, $compileProvider) => {
	'ngInject';
	
	const DEFAULT_ROUTE = '/';	
	const DEFAULT_LANG = 'en';
	const LOG_DEBUG_ENABLED = true;
	const TRANSLATE_SANITIZE_STRATEGY = 'escapeParameters';
	
	
	////////////////////////////////////////////
	// Routing Configuration
	////////////////////////////////////////////
	
	// If the user enters something that doesn't match any of our URL rules, then redirect them to the root:
	$urlRouterProvider.otherwise(DEFAULT_ROUTE);

	// use the HTML5 browser history
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	
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

export default config;