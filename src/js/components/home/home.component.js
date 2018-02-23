'use strict';

import homeTemplate from './home.html';


/**
 * Home component definition. Responsible for displaying the home/index
 * page of the application.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */
const HomeComponent = {
	template: homeTemplate,
	controllerAs: 'home',
	controller: class HomeController {
		
		constructor($log){
			'ngInject';
			this.$log = $log;
		}
		
		/**
		 * Invoked when the component is initialized.
		 */
		$onInit(){
			this.$log.debug('Home.$onInit()');
		}
		
	}
};

export { HomeComponent };