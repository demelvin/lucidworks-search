'use strict';

import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-sanitize';
import 'angular-cookies';
import 'angular-translate';
import 'angular-translate-loader-static-files';
import 'angular-translate-storage-cookie';
import 'angular-translate-storage-local';
import 'angular-local-storage';

import '../styles/app.scss';
import config from './config';
import run from './run';

//define our angular dependencies
const requires = [
	'ngSanitize',
	'ngCookies',
	'ui.router',
	'pascalprecht.translate',
	'LocalStorageModule'
];

//define the application main/root module
const app = angular.module('lwsearch', requires);

app.config(config);
app.run(run);

