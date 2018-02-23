'use strict';

import sideNavTemplate from './sidenav.html';


/**
 * Side navigation (Aside) component definition. 
 * 
 * Responsible for displaying the side navigation (aside) 
 * section containing bookmark's and history.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */
const SideNavComponent = {
	template: sideNavTemplate,
	controllerAs: 'sidenav',
	controller: class SideNavController {
		
		/**
		 * Creates a new SideNavController.
		 */
		constructor($log) {
			'ngInject';
			this.$log = $log;
		}
		
		/**
		 * Invoked when the component is initialized.
		 */
		$onInit() {
			this.$log.debug('SideNav.$onInit()');
		}
	}
};

export { SideNavComponent };