'use strict';

/**
 * @file Side navigation Module.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */

import angular from 'angular';
import { SideNavComponent } from './sidenav.component';
import { SideNavService } from './sidenav.service';

const requires = [];

export const SideNavModule = angular
	.module('sidenav', requires)
	.component('sidenav', SideNavComponent)
	.service('sideNavService', SideNavService)
	.name;
