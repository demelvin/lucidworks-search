'use strict';

import fontawesome from '@fortawesome/fontawesome';
import faAngleDoubleLeft from '@fortawesome/fontawesome-free-solid/faAngleDoubleLeft';
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';
import faAngleDoubleRight from '@fortawesome/fontawesome-free-solid/faAngleDoubleRight';
import settings from '../../../settings';
import searchPagerTemplate from './search-pager.html';

//add fonts
fontawesome.library.add(faAngleDoubleLeft);
fontawesome.library.add(faAngleLeft);
fontawesome.library.add(faAngleRight);
fontawesome.library.add(faAngleDoubleRight);

/**
 * Search pager component definition.
 * 
 * Responsible for displaying paging UI elements and
 * paging the search results.
 * 
 * @author Derek R. Melvin (https://github.com/demelvin)
 */
const SearchPagerComponent = {
	replace: true,
	bindings: {
		current: '<',
		count: '<',
		query: '<',
		category: '<'
	},
	template: searchPagerTemplate,
	controllerAs: 'searchPager',
	controller: class SearchPagerController {
		
		/**
		 * Creates a new SearchPagerComponent.
		 */
		constructor($state, $log) {
			'ngInject';
			this.$state = $state;
			this.$log = $log;
		}
		
		/**
		 * Invoked when the component is initialized.
		 */
		$onInit() {
			this.$log.debug('SearchPager.$onInit()');
			this.current = parseInt(this.current, 10);
			this.setupPaging();
		}
		
		/**
		 * Setup the paging object for the display.
		 */
		setupPaging() {
			this.config = {
				current: this.current,
				pages: this.getPages(),
				last: this.getLastPageNum(),
				first: 0
			};
		}
		
		/**
		 * Creates an Array of page numbers to display.
		 * 
		 * @returns {Array} pages an Array containing the page numbers to display
		 */
		getPages(){
			const pageLimit = settings.PAGING_NUM_OF_PAGES_DISPLAYED;
			const lastPage = this.getLastPageNum();
			const pages = [];
			const current = this.current;
			
			//loop through the next set and create the page number/index
			//range to display.
			for(let i = current; i < (current + pageLimit); i++){
				
				if(i !== current){
					if(i < lastPage){
						pages.push(i); //add page after the current
					} else {
						pages.unshift((current + (current - i))); //add page before the current
					}	
				} else {
					pages.push(current); //add current
				}
				
			}
			
			return pages;
			
		}
		
		/**
		 * Returns the last page number.
		 * 
		 * returns {Integer} lastPageNum the last page number
		 */
		getLastPageNum() {
			const pageSize = settings.PAGING_PAGE_SIZE;
			const lastPageNum = (Math.ceil(this.count / pageSize));
			return (isNaN(lastPageNum) ? 0 : lastPageNum);
		}
		
		/**
		 * Invoked when a page action is selected.
		 * 
		 * Updates the search to display the given page.
		 * 
		 * @param {Number|String} pageNum the page to display
		 */
		pageSelected(pageNum) {
			this.$log.debug('SearchPager.pageSelected(%s)', pageNum);
			pageNum = (pageNum <= 0 ? 0 : pageNum);
			this.$state.go(settings.STATE.SEARCH, {query: this.query, category: this.category, page: pageNum});
		}
		
	}
};

export { SearchPagerComponent };