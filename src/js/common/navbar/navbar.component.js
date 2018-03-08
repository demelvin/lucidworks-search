'use strict';

import fontawesome from '@fortawesome/fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faBookmark from '@fortawesome/fontawesome-free-solid/faBookmark';
import faHistory from '@fortawesome/fontawesome-free-solid/faHistory';
import settings from '../../settings';
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
		constructor($scope, sideNavService, $transitions, $log) {
			'ngInject';
			this.$scope = $scope;
			this.sideNavService = sideNavService;
			this.$transitions = $transitions;
			this.$log = $log;
			this.selected = undefined;
		}
		
		/**
		 * Invoked when the component is initialized.
		 */
		$onInit() {
			this.$log.debug('Navbar.$onInit()');
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
			self.listeners = [];
			
			//hide
			let hideListener = this.$scope.$on(settings.EVENT.HIDE_SIDENAV, () => {
				this.selected = undefined;
			});
			
			let routeChangeListener = this.$transitions.onStart({}, function() {
				//hide if its already displayed
				self.hideSideNav();
			});
			
			//add listeners
			this.listeners.push(hideListener);
			this.listeners.push(routeChangeListener);
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
		 * Hides the side navigation.
		 */
		hideSideNav(){
			//hide side nav
			this.sideNavService.hide();
			//reset
			this.selected = undefined;
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
				this.hideSideNav();
			}
			return displayed;
		}
	}
};

export { NavbarComponent };