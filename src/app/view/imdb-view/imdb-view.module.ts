import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImdbViewComponent } from './imdb-view.component';
import { Model } from '../../models/model';
import { MovieCardModule } from '../movie-card/movie-card.module';
import { SearchBarModule } from '../search-bar/search-bar.module';

@NgModule({
  imports: [CommonModule, MovieCardModule, SearchBarModule],
  declarations: [ImdbViewComponent],
  exports: [ImdbViewComponent],
  providers: [Model]
})
export class ImdbViewModule {}
