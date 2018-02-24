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
	constructor($rootScope, $log) {
		'ngInject';
		this.$log = $log;
		this.$scope = $rootScope;
	}
	
	/**
	 * Displays the aside menu with the
	 * search history list.
	 */
	showHistory() {
		this.show('history');
	}
	
	/**
	 * Displays the aside menu with the
	 * bookmark list.
	 */
	showBookmarks() {
		this.show('bookmarks');
	}

	/**
	 * Displays the given type ('history' | 'bookmarks');
	 * 
	 * @param {String} displayType the type of aside to display.
	 */
	show(displayType) {
		this.$log.info(displayType);
		this.$scope.$broadcast(settings.EVENT.SHOW_SIDENAV, {displayType: displayType});
	}
	
	/**
	 * Hides the side navigation.
	 */
	hide() {
		this.$scope.$broadcast(settings.EVENT.HIDE_SIDENAV);
	}
	
}

export { SideNavService };