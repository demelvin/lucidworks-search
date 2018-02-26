'use strict';

import settings from '../../settings';

/**
 * Service responsible for showing and hiding the side navigation (aside).
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */
class SideNavService {
	
	/**
	 * Creates a new SidNavService.
	 */
	constructor($rootScope, localStorageService, $log) {
		'ngInject';
		this.$log = $log;
		this.$scope = $rootScope;
		this.localStorageService = localStorageService;
	}
	
	/**
	 * Displays the aside menu with the
	 * search history list.
	 */
	showHistory() {
		this.show(settings.LOCAL_STORAGE_KEY.HISTORY);
	}
	
	/**
	 * Displays the aside menu with the
	 * bookmark list.
	 */
	showBookmarks() {
		this.show(settings.LOCAL_STORAGE_KEY.BOOKMARKS);
	}
	
	/**
	 * Adds the given object to history.
	 * 
	 * @param {String} text the display text or the 
	 * 	unmodified text entered by the user
	 * @param {String} query the query param used within the url
	 * @param {String} category the search category
	 * 
	 */
	addHistory(text, query, category){
		let storageKey = settings.LOCAL_STORAGE_KEY.HISTORY;
		let history = {
			text: text,
			query: query,
			category: category 
		};
		let historyList = (this.localStorageService.get(storageKey) || []);
		historyList.unshift(history);
		this.localStorageService.set(storageKey, historyList);
	}
	
	/**
	 * Adds the given bookmark.
	 * 
	 * @param {Object} the bookmark to add
	 */
	addBookmark(bookmark){
		let storageKey = settings.LOCAL_STORAGE_KEY.BOOKMARKS;
		let bookmarks = (this.localStorageService.get(storageKey) || []);
		bookmarks.unshift(bookmark);
		this.localStorageService.set(storageKey, bookmarks);
	}

	/**
	 * Displays side navigation for the given type ('history' | 'bookmarks');
	 * 
	 * @param {String} storageKey the local storage key used to
	 * 	fetch the list of results to display.
	 */
	show(storageKey) {
		this.$log.info(storageKey);
		let results = (this.localStorageService.get(storageKey) || []);
		let args = {
			displayType: storageKey,
			results: results
		};
		this.$scope.$broadcast(settings.EVENT.SHOW_SIDENAV, args);
	}
	
	/**
	 * Hides the side navigation.
	 */
	hide() {
		this.$scope.$broadcast(settings.EVENT.HIDE_SIDENAV);
	}
	
	/**
	 * Removes all cached data for the given side navigation
	 * type.
	 * 
	 * @param {String} type the display type or type of data
	 * 	to remove
	 */
	removeAll(type) {
		this.localStorageService.remove(type);
	}
}

export { SideNavService };