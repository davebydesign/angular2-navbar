import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'search-route',
    styles: [],
    directives: [],
    template: `
    	You Searched for "{{SearchText}}".
    `
})


export class SearchPageComponent { 

	private SearchText : string;

	constructor(
	  public route: ActivatedRoute,
	  public router: Router) {}

	ngOnInit() {

    this.route.params
      .map(params => params['SearchText'])
      .subscribe((SearchText) => {
      	this.SearchText = SearchText;

      });

	}

}