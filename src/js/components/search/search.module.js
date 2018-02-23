'use strict';

/**
 * @file Search Module.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */

import angular from 'angular';
import { SearchComponent } from './search.component';

const requires = [];

export const SearchModule = angular
	.module('search', requires)
	.component('search', SearchComponent)
	.name;