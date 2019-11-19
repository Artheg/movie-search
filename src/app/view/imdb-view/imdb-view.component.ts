import { Component, OnInit } from '@angular/core';
import { Model } from '../../models/model';
import { MovieData } from '../../models/movie-data';

@Component({
  selector: 'app-imdb-view',
  templateUrl: './imdb-view.component.html',
  styleUrls: ['./imdb-view.component.css']
})
export class ImdbViewComponent implements OnInit {

  constructor(public model: Model) { }

  ngOnInit() {
  }

  public get data() {
    return this.model.getSearchData();
  }

  public checkIfSaved = (data: MovieData) => {
    return this.model.checkIfDataSaved(data);
  }

  public onButtonClick = (data: MovieData) => {
    const dataIsSaved = this.checkIfSaved(data);
    if (dataIsSaved) {
      this.model.removeFromLocalStorage(data);
    } else {
      this.model.saveToLocalStorage(data);
    }
  }
}
