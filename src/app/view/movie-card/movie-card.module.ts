import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card.component';
import { MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [MovieCardComponent],
  exports: [MovieCardComponent]
})
export class MovieCardModule { }
