'use strict';

/**
 * @file Search Bar Module.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */

import angular from 'angular';
import { SearchBarComponent } from './search-bar.component';

const requires = [];

export const SearchBarModule = angular
	.module('searchBar', requires)
	.component('searchBar', SearchBarComponent)
	.name;