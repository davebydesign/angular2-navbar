import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`
		@media(max-width:34em) {
		    .navbar .navbar-nav>.nav-item {
		        float: none;
		        margin-left: .1rem;
		    }
		    .navbar .navbar-nav {
		        float:none !important;
		    }
		    .navbar .collapse.in, .navbar .collapsing  {
		        clear:both;
		    }
		}

@media (max-width: 767px) {
  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
}
@media (max-width: 767px) {
  .form-inline .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
}
    `],
    template: `

				<!--
				data-toggle="collapse" 
				data-target="#exCollapsingNavbar" 
				aria-controls="exCollapsingNavbar" 
				aria-expanded="false" 
				aria-label="Toggle navigation"
				-->

		<nav class="navbar navbar-dark bg-inverse">
			<!--
			<button
				class="navbar-toggler hidden-md-up pull-xs-left"
				style="color:white"
				>&#9776;
			</button>
			-->

			<span class="fa fa-bars fa-2x hidden-md-up pull-xs-left bg-inverse" style="color:white; border:none; margin-right: 10px"></span>

      		<a class="navbar-brand" href="#">DaveByDesign</a>
			<form class="form-inline hidden-sm-down" style="position: fixed; right: 10px; top: 10px; margin-left:0px">
      			<input class="form-control" type="text" placeholder="Search">
      			<button class="btn  btn-primary " type="submit">Search</button>
    		</form> <!-- pull-xs-right -->

    		<!--
			<button
				class="hidden-md-up pull-xs-right"
				style="color:white"
				>&#128269;
			</button>
			-->

			<span class="fa fa-search fa-2x hidden-md-up pull-xs-right bg-inverse" style="color:white; border:none"></span>

	  		<ul class="nav navbar-nav hidden-sm-down">
	    		<li class="nav-item active">
	      			<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
	    		</li>
	    		<li class="nav-item">
	      			<a class="nav-link" href="#">Coding</a>
	    		</li>
	    		<li class="nav-item">
	      			<a class="nav-link" href="#">Music</a>
	    		</li>
	    		<li class="nav-item">
	      			<a class="nav-link" href="#">Art</a>
	    		</li>
	    		<li class="nav-item">
	      			<a class="nav-link" href="#">Writing</a>
	    		</li>
	    		<li class="nav-item">
	      			<a class="nav-link" href="#">Blog</a>
	    		</li>
	  		</ul>

		</nav>
    `
})
export class AppComponent { }
