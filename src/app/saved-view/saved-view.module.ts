import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedViewComponent } from './saved-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SavedViewComponent],
  exports: [SavedViewComponent]
})
export class SavedViewModule { }
