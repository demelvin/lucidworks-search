'use strict';

import reviewTemplate from './review.html';


/**
 * Review component definition. Responsible for displaying the review
 * detail page of the application.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */
const ReviewComponent = {
	template: reviewTemplate,
	controllerAs: 'review',
	controller: class ReviewController {
		
		constructor($log){
			'ngInject';
			this.$log = $log;
		}
		
		/**
		 * Invoked when the component is initialized.
		 */
		$onInit(){
			this.$log.debug('Review.$onInit()');
		}
		
	}
};

export { ReviewComponent };