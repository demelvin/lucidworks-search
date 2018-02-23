'use strict';

/**
 * @file Home Module.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */

import angular from 'angular';
import { HomeComponent } from './home.component';
import HomeConfig from './home.config';

const requires = [];

export const HomeModule = angular
	.module('home', requires)
	.component('home', HomeComponent)
	.config(HomeConfig)
	.name;