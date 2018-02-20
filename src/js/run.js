'use strict';

/**
 * @desc 
 * 
 * The angular run module configuration. Kick starts the application after
 * it has been configured.
 * 
 * @author Derek R. Melvin (demelvin@gmail.com)
 */
const run = ($rootScope) => {
	'ngInject';
	
	//TODO for testing only remove this
	$rootScope.test = 'Hello World';
	
};

export default run;