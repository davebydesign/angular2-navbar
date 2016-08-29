import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';



import { AppComponent         }  from './app.component';
import { routing,
         appRoutingProviders  }  from './app.routing';



/* -- MODIFY HERE -- the following import statements to reflect any customized route components  */
import { HomePageComponent    }  from './components/routepages/home/home.component';
import { CodingPageComponent  }  from './components/routepages/coding/coding.component';
import { MusicPageComponent   }  from './components/routepages/music/music.component';
import { ArtPageComponent     }  from './components/routepages/art/art.component';
import { WritingPageComponent }  from './components/routepages/writing/writing.component';
import { BlogPageComponent    }  from './components/routepages/blog/blog.component';
import { PezPageComponent     }  from './components/routepages/pez/pez.component';
import { SearchPageComponent  }  from './components/routepages/search/search.component';





/* Ended up not actualyy using ng-bootstrap */
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [ BrowserModule, /*NgbModule,*/ routing, FormsModule ],
  declarations: [
  	AppComponent,

   /* -- MODIFY HERE -- the following page component names to reflect customized route components imported above  */
  	HomePageComponent,
  	CodingPageComponent,
  	MusicPageComponent,
  	ArtPageComponent,
  	WritingPageComponent,
  	BlogPageComponent,
  	PezPageComponent,
   SearchPageComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
