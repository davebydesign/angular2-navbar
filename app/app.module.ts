import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';



import { AppComponent         }  from './app.component';
import { routing,
         appRoutingProviders  }  from './app.routing';

import { HomePageComponent    }  from './components/routepages/home/home.component';
import { CodingPageComponent  }  from './components/routepages/coding/coding.component';
import { MusicPageComponent   }  from './components/routepages/music/music.component';
import { ArtPageComponent     }  from './components/routepages/art/art.component';
import { WritingPageComponent }  from './components/routepages/writing/writing.component';
import { BlogPageComponent    }  from './components/routepages/blog/blog.component';
import { PezPageComponent     }  from './components/routepages/pez/pez.component';
import { SearchPageComponent  }  from './components/routepages/search/search.component';


  	

  	

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [ BrowserModule, NgbModule, routing, FormsModule ],
  declarations: [ 
  	AppComponent,
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
