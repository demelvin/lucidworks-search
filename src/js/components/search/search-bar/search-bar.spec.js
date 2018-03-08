
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {

	const $transitions = {
		onSuccess: angular.noop
	};
	var ctrl;
	
	beforeEach(inject((_$log_) => {
		ctrl = new SearchBarComponent.controller({}, $transitions, {}, _$log_);
	}));
	
	it('should initialize defaults when instantiated.', () => {
		expect(ctrl.$state).toBeDefined();
		expect(ctrl.$transitions).toBeDefined();
		expect(ctrl.sideNavService).toBeDefined();
		expect(ctrl.$log).toBeDefined();
		expect(ctrl.query).not.toBeDefined();
		expect(ctrl.categories).toBeDefined();
		expect(ctrl.categories.length).not.toEqual(0);
		expect(ctrl.listeners).toBeDefined();
		expect(ctrl.listeners.length).toEqual(0);
		expect(ctrl.showCategories).toEqual(false);
	});
	
	
	it('should call the `setupListeners` when $onInit is called.', () => {
		spyOn(ctrl, 'setupListeners');
	    ctrl.$onInit();
	    expect(ctrl.setupListeners).toHaveBeenCalled();
	});
	
	
	it('should create a total of one listener.', () => {
		ctrl.setupListeners();
		expect(ctrl.listeners.length).toEqual(1);
	});
	
	it('should set category when `updateCategory` is invoked if category is defined.', () => {
		let category = 'mock';
		ctrl.updateCategory(category);
		expect(ctrl.category).toEqual(category);
	});
	
	it('should not set category when `updateCategory` is invoked if category is not defined.', () => {
		let category = 'mock';
		ctrl.category = category;
		ctrl.updateCategory(undefined);
		expect(ctrl.category).toEqual(category);
	});
	
	it('should call `search` when `updateCategory` is invoked and category has changed + query is defined.', () => {
		spyOn(ctrl, 'search');
		ctrl.query = 'test';
		ctrl.category = 'mock';
		ctrl.updateCategory({name: 'ANY', field: ''});
		expect(ctrl.search).toHaveBeenCalled();
	});
	
});