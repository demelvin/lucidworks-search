'use strict';

/**
 * @file Search Module.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */

import angular from 'angular';
import { SearchComponent } from './search.component';
import { SearchService } from './search.service';
import { SearchBarModule } from './search-bar/search-bar.module';
import { SearchPagerModule } from './search-pager/search-pager.module';
import SearchConfig from './search.config';

const requires = [
	SearchBarModule,
	SearchPagerModule
];

export const SearchModule = angular
	.module('search', requires)
	.config(SearchConfig)
	.component('search', SearchComponent)
	.service('searchService', SearchService)
	.name;