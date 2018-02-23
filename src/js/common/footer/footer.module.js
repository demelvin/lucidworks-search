'use strict';

/**
 * @file Footer Module.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */

import angular from 'angular'; 
import { FooterComponent } from './footer.component';

const requires = [];

export const FooterModule = angular
	.module('footer', requires)
	.component('footer', FooterComponent)
	.name;
