'use strict';

import footerTemplate from './footer.html';

/**
 * @desc
 * 
 * Footer component definition. Responsible for displaying the page footer.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */
const FooterComponent = {
	template: footerTemplate,
	controllerAs: 'footer',
	controller: class FooterController {
		
		/**
		 * Creates a new FooterController.
		 */
		constructor($log) {
			'ngInject';
			this.$log = $log;
			this.date = new Date();
		}
		
		/**
		 * Invoked when the component is initialized.
		 */
		$onInit() {
			this.$log.debug('Footer.$onInit()');
		}
	}
};

export { FooterComponent };