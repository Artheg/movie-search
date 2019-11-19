import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarModule } from './view/search-bar/search-bar.module';
import { SidenavModule } from './view/sidenav/sidenav.module';
import { MatButtonModule } from '@angular/material';
import { ImdbViewModule } from './view/imdb-view/imdb-view.module';
import { SavedViewComponent } from './view/saved-view/saved-view.component';
import { SavedViewModule } from './view/saved-view/saved-view.module';
import { Model } from './models/model';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NoopAnimationsModule,
      SearchBarModule,
      SidenavModule,
      MatButtonModule,
      ImdbViewModule,
      SavedViewModule,
      HttpClientModule
   ],
   providers: [
      Model
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
