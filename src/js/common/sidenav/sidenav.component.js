'use strict';

import settings from '../../settings';
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
		constructor($scope, $log) {
			'ngInject';
			this.$scope = $scope;
			this.$log = $log;
			this.displayType = undefined;
			this.listeners = [];
		}
		
		/**
		 * Invoked when the component is initialized.
		 */
		$onInit() {
			this.$log.debug('SideNav.$onInit()');
			this.setupListeners();
		}
		
		/**
		 * Destroy listeners just in case.
		 */
		$onDestroy() {
			//iterate over event listeners and destroy them
			for(let listener of this.listeners){
				listener();
			}
		}
		
		/**
		 * Setup the event listeners used to show/hide the 
		 * SideNavComponent.
		 */
		setupListeners() {
			let self = this;
			
			//show
			let showListener = this.$scope.$on(settings.EVENT.SHOW_SIDENAV, (event, args) => {
				self.displayType = args.displayType;
			});
			
			//hide
			let hideListener = this.$scope.$on(settings.EVENT.HIDE_SIDENAV, () => {
				self.displayType = undefined;
			});
			
			//add listener
			this.listeners.push(showListener);
			this.listeners.push(hideListener);
		}
	}
};

export { SideNavComponent };