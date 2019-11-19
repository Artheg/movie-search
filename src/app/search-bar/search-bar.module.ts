import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { Model } from '../models/model';
import { OmdbService } from '../services/omdb.service';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule
  ],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
  providers: [Model, OmdbService]
})
export class SearchBarModule { }
