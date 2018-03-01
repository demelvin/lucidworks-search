'use strict';

/**
 * @file Review Module.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */

import angular from 'angular';
import { ReviewComponent } from './review.component';
import { ReviewService } from './review.service';
import { ReviewMap } from './review-map.directive';
import ReviewConfig from './review.config';

const requires = [];

export const ReviewModule = angular
	.module('review', requires)
	.component('review', ReviewComponent)
	.service('reviewService', ReviewService)
	.directive('reviewMap', ReviewMap)
	.config(ReviewConfig)
	.name;