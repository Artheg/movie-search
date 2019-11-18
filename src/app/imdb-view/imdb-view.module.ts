import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImdbViewComponent } from './imdb-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImdbViewComponent],
  exports: [ImdbViewComponent]
})
export class ImdbViewModule { }
