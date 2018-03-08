
import { ReviewComponent } from './review.component';

describe('ReviewComponent', () => {
  
	const $stateParams = {
		id: '123'
	};
	const reviewService = {};
	const localStorageService = {};
	const sideNavService = {};
	var ctrl;
	
	beforeEach(inject((_$log_) => {
		ctrl = new ReviewComponent.controller(_$log_, $stateParams, reviewService, localStorageService, sideNavService);
	}));
	
	it('should initialize defaults when instantiated.', () => {
		expect(ctrl.$log).toBeDefined();
		expect(ctrl.$stateParams).not.toBeDefined();
		expect(ctrl.reviewId).toBeDefined();
		expect(ctrl.reviewService).toBeDefined();
		expect(ctrl.localStorageService).toBeDefined();
		expect(ctrl.sideNavService).toBeDefined();
	});
	
});