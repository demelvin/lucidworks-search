'use strict';

import angular from 'angular';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { SideNavModule } from './sidenav/sidenav.module';

const requires = [
	SideNavModule,
	NavbarModule,
	FooterModule	
];

/**
 * Common module used to define all application
 * specific components.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */
const CommonModule = angular
	.module('app.common', requires)
	.name;

export { CommonModule };