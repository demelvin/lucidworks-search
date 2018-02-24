'use strict';

/**
 * @file Search Module.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */

import angular from 'angular';
import { SearchComponent } from './search.component';
import { SearchBarModule } from './search-bar/search-bar.module';
import SearchConfig from './search.config';

const requires = [
	SearchBarModule
];

export const SearchModule = angular
	.module('search', requires)
	.config(SearchConfig)
	.component('search', SearchComponent)
	.name;