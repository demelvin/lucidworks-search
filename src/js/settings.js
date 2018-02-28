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
			SEARCH: 'search',
			REVIEW: 'review'
		},
		
		/////////////////////////////////////////////
		// EVENTS
		/////////////////////////////////////////////
		EVENT: {
			SHOW_SIDENAV: 'event.show-sidenav',
			HIDE_SIDENAV: 'event.hide-sidenav'
		},
		
		/////////////////////////////////////////////
		// SEARCH
		/////////////////////////////////////////////
		CATEGORIES: {
			ANY: {
				name: 'ANY',
				field: '*'
			},
			TITLE: {
				name: 'TITLE',
				field: 'title_t'
			},
			WINERY: {
				name: 'WINERY',
				field: 'winery_t'
			},
			TASTER: {
				name: 'TASTER',
				field: 'taster_name_t'
			}
		},
		
		/////////////////////////////////////////////
		// SEARCH API
		/////////////////////////////////////////////
		API: {
			BASE_URL: 'http://localhost:8764/api',
			USERNAME: 'lwsearch-app',
			PASSWORD: 'lucidworks2018',
			COOKIE: 'id',
			ENDPOINT: {
				SEARCH: '/apps/qvino/query/qvino',
				AUTH: '/session?realmName=native'
			}
		}
		
};

export default Settings;