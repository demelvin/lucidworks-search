'use strict';

/**
 * Directive used to display a map of a specified region.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */
const ReviewMap = ($log) => {
	'ngInject';
	
	return {
		restrict: 'A',
		link: (scope, element, attrs) => {
			
			const mapOptions = {
	            center: new google.maps.LatLng(50, 2),
	            zoom: 5,
	            mapTypeId: google.maps.MapTypeId.HYBRID,
	            disableDefaultUI: true
	        };
			const geocoder = new google.maps.Geocoder();
			
			/**
			 * Initialize the google map.
			 */
			const initMap = () => {
				const map = new google.maps.Map(element[0], mapOptions);
				centerLocation(map, attrs.province, attrs.country);
			};
			
			/**
			 * Centers the given map on the target region.
			 */
			const centerLocation = (map, province, country) => {
				if(map && province && country){
					let address = (province + ',' + country);
					geocoder.geocode({'address': address}, (results, status) => {
					    if (status === 'OK') {
					      map.setCenter(results[0].geometry.location);
					    } else {
					      $log.error('Failed to geocode the target region. An error was returned.', status);
					    }
					});
				}
			};
			
			//initialize map
			initMap();
		}
	};
};

export { ReviewMap };