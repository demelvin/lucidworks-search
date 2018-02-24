'use strict';

/**
 * @desc 
 * 
 * Application settings.
 * 
 * Contains common constant key/value pairs.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */

const Settings = {
		
		///////////////////////////////////////////
		// COMMON
		///////////////////////////////////////////
		APP_NAME: 'QVino',
		
		///////////////////////////////////////////
		// LOCAL STORAGE
		///////////////////////////////////////////
		LOCAL_STORAGE_PREFIX: 'lws',
		LOCAL_STORAGE_KEY: {
			HISTORY: 'history',
			BOOKMARKS: 'bookmarks'
		},
		
		/////////////////////////////////////////////
		// ROUTING
		/////////////////////////////////////////////
		STATE: {
			HOME: 'home',
			SEARCH: 'search'
		},
		
		/////////////////////////////////////////////
		// EVENTS
		/////////////////////////////////////////////
		EVENT: {
			SHOW_SIDENAV: 'event.show-sidenav',
			HIDE_SIDENAV: 'event.hide-sidenav'
		}
		
};

export default Settings;