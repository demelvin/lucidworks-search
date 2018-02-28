'use strict';

import settings from '../../settings';

/**
 * Review Service class used to fetch review information from
 * the API.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */
class ReviewService {
	
	/**
	 * Constructs a new ReviewService.
	 */
	constructor($http, $q, $log) {
		'ngInject';
		this.$http = $http;
		this.$q = $q;
		this.$log = $log;
	}
	
	/**
	 * Returns a promise that resolves with the review information.
	 * 
	 * @param {String} id the id of the review to return the
	 * 	information for
	 * @returns {Promise} promise a promise that resolves with an object
	 * 	containing the review information
	 */
	getReview(id) {
		this.$log.debug('ReviewService.getReview(%s)', id);
		const deferred = this.$q.defer();
		const request = {
			method : 'GET',
			url : settings.API.BASE_URL + settings.API.ENDPOINT.SEARCH,
			params: {
				q: ('id:' + id)
			}
		};
		
		//send request
		this.$http(request)
		.then((response) => {
			this.$log.debug('Fetch by id successful. response: %o', response);
			//build domain object
			let result = this.toResult(response);
			//resolve with results
			deferred.resolve(result);
	    }, (errorResponse) => {
	    	this.$log.error('Failed to fetch review for id %s. An error was returned', id, errorResponse);
	    	deferred.reject();
	    });
		
		return deferred.promise;
	}
	
	/**
	 * Transforms the given response to a domain result
	 * object to be used within the review detail UI.
	 * 
	 * @param {Object} response the search response object
	 * @returns {Object} result a domain object containing the review information
	 */
	toResult(response){
		const data = response.data || {};
		response = data.response || {};
		const docs = response.docs || [];
		
		let result = {};
		if(docs.length > 0){
			result = docs[0];
		}
		
		return result;
	}
}

export { ReviewService };