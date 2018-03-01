'use strict';

/**
 * @file Search Pager Module.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */

import angular from 'angular';
import { SearchPagerComponent } from './search-pager.component';

const requires = [];

export const SearchPagerModule = angular
	.module('searchPager', requires)
	.component('searchPager', SearchPagerComponent)
	.name;