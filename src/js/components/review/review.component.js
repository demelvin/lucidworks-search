'use strict';

import fontawesome from '@fortawesome/fontawesome';
import faCertificate from '@fortawesome/fontawesome-free-solid/faCertificate';
import fasBookmark from '@fortawesome/fontawesome-free-solid/faBookmark';
import farBookmark from '@fortawesome/fontawesome-free-regular/faBookmark';
import settings from '../../settings';
import reviewTemplate from './review.html';

//images
import wineRedLargeImage from '../../../images/wine-red-lg.png';

//add fonts
fontawesome.library.add(faCertificate);
fontawesome.library.add(fasBookmark);
fontawesome.library.add(farBookmark);


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
		
		/**
		 * Creates a new ReviewComponent.
		 */
		constructor($log, $stateParams, reviewService, localStorageService, sideNavService) {
			'ngInject';
			this.$log = $log;
			this.reviewId = $stateParams.id;
			this.reviewService = reviewService;
			this.localStorageService = localStorageService;
			this.sideNavService = sideNavService;
			this.detail = undefined;
			this.loadFailed = false;
			this.isLoading = false;
			this.isBookmarked = false;
			this.wineRedLargeImage = wineRedLargeImage;
		}
		
		/**
		 * Invoked when the component is initialized.
		 */
		$onInit() {
			this.$log.debug('Review.$onInit()');
			if(this.reviewId){
				this.setupDisplay();
				this.isBookmarked = this.hasBookmark();
			} else {
				$log.warn('Cannot display review. No "id" value provided.');
			}
		}
		
		/**
		 * Setup the review display.
		 */
		setupDisplay() {
			this.isLoading = true;
			this.reviewService.getReview(this.reviewId)
			.then((detail) => {
				this.detail = detail;
			}, (error) => {
				this.$log.error('Failed to fetch the review information. An error was returned.', error);
				this.loadFailed = true;	
			})
			['finally'](() => {
				this.isLoading = false;
			});
		}
		
		/**
		 * Determines if the review item has been
		 * bookmarked. 
		 * 
		 * Returns true if the review item has been bookmarked.
		 * 
		 * @returns {Boolean} hasBookmark true if the review item 
		 * 	has been bookmarked
		 */
		hasBookmark() {
			const bookmarks = this.localStorageService.get(settings.LOCAL_STORAGE_KEY.BOOKMARKS) || {};
			const bookmark = bookmarks[this.reviewId];
			return (bookmark ? true : false);
		}
		
		/**
		 * Toggles the bookmark adding or removing it from
		 * local storage.
		 */
		toggleBookmark() {
			this.$log.debug('toggle bookark');
			
			//hide side navigation
			this.sideNavService.hide();
			
			const bookmarks = this.localStorageService.get(settings.LOCAL_STORAGE_KEY.BOOKMARKS) || {};
			if(this.isBookmarked){
				delete bookmarks[this.reviewId];
			} else {
				bookmarks[this.reviewId] = this.detail;
			}
			//toggle
			this.isBookmarked = !this.isBookmarked;
			//update local storage
			this.localStorageService.set(settings.LOCAL_STORAGE_KEY.BOOKMARKS, bookmarks);
		}
	}
};

export { ReviewComponent };