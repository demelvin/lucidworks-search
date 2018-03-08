
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  
	const sideNavService = {
		showHistory: angular.noop,
		showBookmarks: angular.noop,
		hide: angular.noop
	};
	const $transitions = {
			onStart: angular.noop
	};
	var ctrl;
	var $scope;
	
	beforeEach(inject((_$rootScope_, _$log_) => {
		
		$scope = _$rootScope_.$new();
		ctrl = new NavbarComponent.controller($scope, sideNavService, $transitions, _$log_);
	}));
	
	it('should initialize defaults when instantiated.', () => {
		expect(ctrl.$scope).toBeDefined();
		expect(ctrl.$transitions).toBeDefined();
		expect(ctrl.sideNavService).toBeDefined();
		expect(ctrl.$log).toBeDefined();
		expect(ctrl.selected).not.toBeDefined();
	});
	
	it('should call the `setupListeners` when $onInit is called.', () => {
		spyOn(ctrl, 'setupListeners');
	    ctrl.$onInit();
	    expect(ctrl.setupListeners).toHaveBeenCalled();
	});
	
	it('should create a total of two listeners.', () => {
		ctrl.setupListeners();
		expect(ctrl.listeners.length).toEqual(2);
	});
	
	it('should set selected equal to `history` when `showHistory` is invoked and call `sideNavService.showHistory()`', () => {
		spyOn(sideNavService, 'showHistory');
		ctrl.showHistory();
		expect(ctrl.selected).toEqual('history');
		expect(sideNavService.showHistory).toHaveBeenCalled();
	});
	
	it('should hide history and not invoke `sideNavService.showHistory()` when history is currently displayed', () => {
		spyOn(sideNavService, 'showHistory');
		spyOn(sideNavService, 'hide');
		ctrl.selected = 'history';
		ctrl.showHistory();
		expect(ctrl.selected).not.toEqual('history');
		expect(sideNavService.showHistory).not.toHaveBeenCalled();
		expect(sideNavService.hide).toHaveBeenCalled();
	});
	
	it('should set selected equal to `bookmarks` when `showBookmarks` is invoked and call `sideNavService.showBookmarks()`', () => {
		spyOn(sideNavService, 'showBookmarks');
		ctrl.showBookmarks();
		expect(ctrl.selected).toEqual('bookmarks');
		expect(sideNavService.showBookmarks).toHaveBeenCalled();
	});
	
	it('should hide bookmarks and not invoke `sideNavService.showBookmarks()` when bookmarks are currently displayed', () => {
		spyOn(sideNavService, 'showBookmarks');
		spyOn(sideNavService, 'hide');
		ctrl.selected = 'bookmarks';
		ctrl.showBookmarks();
		expect(ctrl.selected).not.toEqual('bookmarks');
		expect(sideNavService.showBookmarks).not.toHaveBeenCalled();
		expect(sideNavService.hide).toHaveBeenCalled();
	});
	
	it('`isDisplayed` should invoke `hideSideNav` if already displayed', () => {
		spyOn(ctrl, 'hideSideNav');
		let selected = 'mock';
		ctrl.selected = selected;
		expect(ctrl.isDisplayed(selected)).toEqual(true);
		expect(ctrl.hideSideNav).toHaveBeenCalled();
	});
	
	it('`isDisplayed` should not invoke `hideSideNav` if not displayed', () => {
		spyOn(ctrl, 'hideSideNav');
		let selected = 'mock';
		ctrl.selected = 'mock2';
		expect(ctrl.isDisplayed(selected)).toEqual(false);
		expect(ctrl.hideSideNav).not.toHaveBeenCalled();
	});
	
	
});