'use strict';

import fontawesome from '@fortawesome/fontawesome';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash';
import faBookmark from '@fortawesome/fontawesome-free-solid/faBookmark';
import faHistory from '@fortawesome/fontawesome-free-solid/faHistory';
import settings from '../../settings';
import sideNavTemplate from './sidenav.html';

fontawesome.library.add(faTrash);
fontawesome.library.add(faHistory);
fontawesome.library.add(faBookmark);



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
		constructor($scope, sideNavService, $log) {
			'ngInject';
			this.$scope = $scope;
			this.sideNavService = sideNavService;
			this.$log = $log;
			this.displayType = undefined;
			this.results = [];
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
				self.results = (args.results || []);
			});
			
			//hide
			let hideListener = this.$scope.$on(settings.EVENT.HIDE_SIDENAV, () => {
				self.displayType = undefined;
				self.results = [];
			});
			
			//add listener
			this.listeners.push(showListener);
			this.listeners.push(hideListener);
		}
		
		/**
		 * Invoked when a result is selected within the side
		 * nav. Kicks off the search for the given query.
		 */
		onClick(){
			//TOOD transition to search or detail
		}
		
		/**
		 * Invoked when the clear/remove action
		 * is selected. Removes all history or bookmark's
		 * dependent upon what is displayed.
		 */
		removeAll(){
			this.results = [];
			this.sideNavService.removeAll(this.displayType);
		}
	}
};

export { SideNavComponent };