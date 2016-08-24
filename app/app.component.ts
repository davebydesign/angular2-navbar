import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component'

@Component({
    selector: 'my-app',
    styles: [],
    directives: [NavbarComponent],
    template: `
    	<my-navbar></my-navbar>
    `
})
export class AppComponent { }
