'use strict';

/**
 * @file Navigation bar Module.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */

import angular from 'angular';
import { NavbarComponent } from './navbar.component';

const requires = [];

export const NavbarModule = angular
	.module('navbar', requires)
	.component('navbar', NavbarComponent)
	.name;
