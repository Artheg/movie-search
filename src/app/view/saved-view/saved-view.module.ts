import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedViewComponent } from './saved-view.component';
import { Model } from '../../models/model';
import { MovieCardModule } from '../movie-card/movie-card.module';

@NgModule({
  imports: [
    CommonModule,
    MovieCardModule
  ],
  declarations: [SavedViewComponent],
  exports: [SavedViewComponent],
  providers: [Model]
})
export class SavedViewModule { }
