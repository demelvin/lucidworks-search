
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  
	var ctrl;
	
	beforeEach(inject((_$log_) => {
		ctrl = new HomeComponent.controller(_$log_);
	}));
	
	it('should initialize defaults when instantiated.', () => {
		expect(ctrl.$log).toBeDefined();
	});
	
});