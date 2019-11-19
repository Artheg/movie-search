import { Component, OnInit } from '@angular/core';
import { Model } from '../../models/model';
import { MovieData } from '../../models/movie-data';

@Component({
  selector: 'app-saved-view',
  templateUrl: './saved-view.component.html',
  styleUrls: ['./saved-view.component.css']
})
export class SavedViewComponent implements OnInit {
  constructor(private model: Model) {}

  ngOnInit() {}

  public get data() {
    return this.model.getSavedDataArray();
  }

  public checkIfSaved = (data: MovieData) => {
    return this.model.checkIfDataSaved(data);
  };

  public onButtonClick = (data: MovieData) => {
    this.model.removeFromLocalStorage(data);
  };
}
