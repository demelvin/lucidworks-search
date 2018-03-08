
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  
	var ctrl;
	
	beforeEach(inject((_$log_) => {
		ctrl = new FooterComponent.controller(_$log_);
	}));
	
	it('should initialize defaults when instantiated.', () => {
		expect(ctrl.$log).toBeDefined();
		expect(ctrl.date).toBeDefined();
		let now = new Date();
		expect(ctrl.date.getYear()).toEqual(now.getYear());
	});
	
});