import { Component, OnInit } from '@angular/core';
import { Model } from '../../models/model';
import { OmdbService } from '../../services/omdb.service';
import { MovieData } from '../../models/movie-data';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public formControl: FormControl = new FormControl();
  constructor(private omdbService: OmdbService, private model: Model) {}

  ngOnInit() {}

  public get isLoading(): boolean {
    return this.model.getIsLoading();
  }

  performSearch = (value: string) => {
    console.log(value);
    this.model.setIsLoading(true);
    this.omdbService.search(value).subscribe(data => {
      this.model.setIsLoading(false);
      if (data['Error']) {
        alert(data['Error']);
        return;
      }
      this.model.setSearchData(data['Search'] as MovieData[]);
      console.log('data set', this.model.getSearchData());
    });
  };
}
