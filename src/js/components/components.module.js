'use strict';

import angular from 'angular';
import { HomeModule } from './home/home.module';
import { SearchModule } from './search/search.module';
import { ReviewModule } from './review/review.module';

const requires = [
	HomeModule,
	SearchModule,
	ReviewModule
];

/**
 * Components module used to define all "low level" components
 * so that a single component (this one) can be included
 * by the application as well as imported by the common
 * modules.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */
const ComponentsModule = angular
	.module('app.components', requires)
	.name;

export { ComponentsModule };