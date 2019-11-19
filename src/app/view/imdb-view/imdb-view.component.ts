import { Component, OnInit } from '@angular/core';
import { Model } from '../../models/model';

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
}
