
import { SideNavComponent } from './sidenav.component';
import { SideNavService} from './sidenav.service';
import settings from '../../settings';

//component
describe('SideNavComponent', () => {
  
	const sideNavService = {
			removeAll: angular.noop
	};
	var ctrl;
	var $scope;
	beforeEach(inject((_$rootScope_, _$log_) => {
		$scope = _$rootScope_.$new();
		ctrl = new SideNavComponent.controller($scope, sideNavService, _$log_);
	}));
	
	it('should initialize defaults when instantiated.', () => {
		expect(ctrl.$scope).toBeDefined();
		expect(ctrl.sideNavService).toBeDefined();
		expect(ctrl.$log).toBeDefined();
		expect(ctrl.displayType).not.toBeDefined();
		expect(ctrl.results).toBeDefined();
		expect(ctrl.results.length).toEqual(0);
		expect(ctrl.listeners).toBeDefined();
		expect(ctrl.listeners.length).toEqual(0);
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
	
	it('`removeAll` should clear results and call `sideNavService.removeAll()`', () => {
		spyOn(sideNavService, 'removeAll');
		ctrl.removeAll();
		expect(sideNavService.removeAll).toHaveBeenCalled();
	});
	
});

//service
describe('SideNavService', () => {
	
	var resultsAny;
	var $rootScope;
	var $scope;
	var service;
	var localStorageService;
	
	beforeEach(inject((_$rootScope_, _$log_) => {
		$rootScope = _$rootScope_;
		$scope = _$rootScope_.$new();
		resultsAny = ['1', '2'];
		localStorageService = {
			get: () => {
				return resultsAny;
			},
			set: angular.noop,
			remove: () => {
				resultsAny = [];
			}
		};
		service = new SideNavService($scope, localStorageService, _$log_);
	}));
	
	it('should initialize defaults when instantiated.', () => {
		expect(service.$scope).toBeDefined();
		expect(service.localStorageService).toBeDefined();
		expect(service.$log).toBeDefined();
	});
	
	it('`showHistory` should fetch history from local storage and broadcast show event', () => {
		spyOn($rootScope, '$broadcast');
		service.showHistory();
		expect($rootScope.$broadcast).toHaveBeenCalledWith(settings.EVENT.SHOW_SIDENAV, {displayType: 'history', results: resultsAny});
	});
	
	it('`showBookmarks` should fetch bookmarks from local storage and broadcast show event', () => {
		spyOn($rootScope, '$broadcast');
		service.showBookmarks();
		expect($rootScope.$broadcast).toHaveBeenCalledWith(settings.EVENT.SHOW_SIDENAV, {displayType: 'bookmarks', results: resultsAny});
	});
	
	it('`hide` should broadcast hide event', () => {
		spyOn($rootScope, '$broadcast');
		service.hide();
		expect($rootScope.$broadcast).toHaveBeenCalledWith(settings.EVENT.HIDE_SIDENAV);
	});
	
	it('should add history to local storage', () => {
		let text = 'text';
		let query = 'query';
		let category = 'category';
		service.addHistory(text, query, category);
		let history = service.localStorageService.get(settings.LOCAL_STORAGE_KEY.HISTORY);
		expect(history.length).toEqual(3);
		let historyAdded = history[0];
		expect(historyAdded.text).toEqual(text);
		expect(historyAdded.query).toEqual(query);
		expect(historyAdded.category).toEqual(category);
	});
	
	it('should remove all history from local storage', () => {
		service.removeAll(settings.LOCAL_STORAGE_KEY.HISTORY);
		let history = service.localStorageService.get(settings.LOCAL_STORAGE_KEY.HISTORY);
		expect(history.length).toEqual(0);
	});
	
	it('should remove all bookmarks from local storage', () => {
		service.removeAll(settings.LOCAL_STORAGE_KEY.HISTORY);
		let bookmarks = service.localStorageService.get(settings.LOCAL_STORAGE_KEY.BOOKMARKS);
		expect(bookmarks.length).toEqual(0);
	});
	

});