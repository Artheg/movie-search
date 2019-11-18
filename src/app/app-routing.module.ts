import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImdbViewComponent } from './imdb-view/imdb-view.component';
import { SavedViewComponent } from './saved-view/saved-view.component';

const routes: Routes = [
  {
    path: '',
    component: ImdbViewComponent
  },
  {
    path: 'imdb',
    component: ImdbViewComponent
  },
  {
    path: 'saved',
    component: SavedViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
