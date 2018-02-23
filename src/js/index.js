'use strict';

/**
 * @file
 * 
 * Application module. This is the main entry point of the application.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */



//3rd Party imports
import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-sanitize';
import 'angular-cookies';
import 'angular-translate';
import 'angular-translate-loader-static-files';
import 'angular-translate-storage-cookie';
import 'angular-translate-storage-local';
import 'angular-local-storage';

//local imports
import '../styles/app.scss';
import config from './config';
import run from './run';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from './common/common.module';


//define our angular dependencies
const requires = [
	'ngSanitize',
	'ngCookies',
	'ui.router',
	'pascalprecht.translate',
	'LocalStorageModule',
	ComponentsModule,
	CommonModule
];

//define the application main/root module
const app = angular.module('app', requires);

app.config(config);
app.run(run);

