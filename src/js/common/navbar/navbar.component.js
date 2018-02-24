'use strict';

import fontawesome from '@fortawesome/fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faBookmark from '@fortawesome/fontawesome-free-solid/faBookmark';
import faHistory from '@fortawesome/fontawesome-free-solid/faHistory';
import navbarTemplate from './navbar.html';

fontawesome.library.add(faSearch);
fontawesome.library.add(faBookmark);
fontawesome.library.add(faHistory);

/**
 * Navigation bar component definition. Responsible for displaying the navigation
 * menu/header.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */
const NavbarComponent = {
	template: navbarTemplate,
	controllerAs: 'navbar',
	controller: class NavbarController {
		
		/**
		 * Creates a new NavbarController.
		 */
		constructor(sideNavService, $log) {
			'ngInject';
			this.$log = $log;
			this.sideNavService = sideNavService;
			this.selected = undefined;
		}
		
		/**
		 * Invoked when the component is initialized.
		 */
		$onInit() {
			this.$log.debug('Navbar.$onInit()');
		}

		/**
		 * Displays the aside menu with the
		 * search history list.
		 */
		showHistory() {
			let target = 'history';
			if(!this.isDisplayed(target)){
				this.sideNavService.showHistory();
				this.selected = target;
			}
		}
		
		/**
		 * Displays the aside menu with the
		 * bookmark list.
		 */
		showBookmarks() {
			let target = 'bookmarks';
			if(!this.isDisplayed(target)){
				this.sideNavService.showBookmarks();
				this.selected = target;
			}
		}
		
		/**
		 * Checks to see if the given target is already
		 * displayed. If the target is displayed it will be
		 * hidden and true will be returned. Otherwise
		 * false is returned.
		 * 
		 * @param {String} target the target selection to check
		 * @returns {Boolean} isDisplayed true if the target is already displayed
		 */
		isDisplayed(target){
			let displayed = (this.selected && this.selected === target);
			if(displayed){
				//hide if its already displayed
				this.sideNavService.hide();
				//reset
				this.selected = undefined;
			}
			return displayed;
		}
	}
};

export { NavbarComponent };