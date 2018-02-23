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
		constructor($log) {
			'ngInject';
			this.$log = $log;
		}
		
		/**
		 * Invoked when the component is initialized.
		 */
		$onInit() {
			this.$log.debug('Navbar.$onInit()');
		}
	}
};

export { NavbarComponent };