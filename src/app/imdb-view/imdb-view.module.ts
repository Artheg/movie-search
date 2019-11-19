import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImdbViewComponent } from './imdb-view.component';
import { Model } from '../models/model';
import { MovieCardModule } from '../movie-card/movie-card.module';

@NgModule({
  imports: [CommonModule, MovieCardModule],
  declarations: [ImdbViewComponent],
  exports: [ImdbViewComponent],
  providers: [Model]
})
export class ImdbViewModule {}
