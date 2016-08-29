import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
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
