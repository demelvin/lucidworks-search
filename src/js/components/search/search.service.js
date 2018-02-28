'use strict';

import settings from '../../settings';


/**
 * Service responsible for performing searches and returning results.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */
class SearchService {
	
	/**
	 * Creates a new SearchService.
	 */
	constructor($http, $q, $log){
		'ngInject';
		this.$http = $http;
		this.$q = $q;
		this.$log = $log;
	}
	
	/**
	 *  Executes a query/search request against the search API.
	 * 
	 * @param {String} query the query used to filter the search
	 * @param {String} categoryName the category (search field) used 
	 * 	to filter the search results
	 * @param {String} page the page number (offset) of the results to request
	 * @returns {Promise<Object>} promise a promise that resolves 
	 * 	with an Object containing the results and the result metadata
	 */
	search(query, categoryName, page) {
		this.$log.debug('SearchService.search(%s, %s, %s)', query, categoryName, page);
		const deferred = this.$q.defer();
		const request = {
				method : 'GET',
				url : settings.API.BASE_URL + settings.API.ENDPOINT.SEARCH,
				withCredentials: true,
				params: {
					start: (page || 0),
					q: this.buildQuery(query, categoryName),
				}
		};
		
		this.$http(request)
		.then((response) => {
			this.$log.debug('Search successful. response: %o', response);
			//build domain object
			let result = this.toResult(response);
			//resolve with results
			deferred.resolve(result);
	    }, (errorResponse) => {
	    	this.$log.error('Failed to perform search. An error was returned', errorResponse);
	    	deferred.reject();
	    });
		
		return deferred.promise;
	}
	
	
	/**
	 * Builds the query parameter value to send in the search
	 * request.
	 * 
	 * @param {String} query the query string
	 * @param {String=ALL} categoryName the name of the category (field) to query
	 * @returns {String} value the query param value
	 */
	buildQuery(query, categoryName){
		let defaultCategory = settings.CATEGORIES.ANY;
		let category = (categoryName ? settings.CATEGORIES[categoryName.toUpperCase()] : settings.CATEGORIES.ANY);
		let q = ((category ? category.field : defaultCategory.field) + ':' + query);
		return q;
	}
	
	/**
	 * Transforms the given response to a domain result
	 * object to be used within components.
	 * 
	 * @param {Object} response the search response object
	 * @returns {Object} result a domain object to be used within components
	 * 	and views
	 */
	toResult(response){
		const data = response.data || {};
		response = data.response || {};
		const result = {
			total: response.numFound || 0,
			page: response.start || 0,
			items: []
		};
		const docs = response.docs || [];
		//iterate through the docs and add to items array
		for(let i = 0; i < docs.length; i++){
			result.items.push(docs[i]);
		}		
		return result;
	}
	
}

export { SearchService };