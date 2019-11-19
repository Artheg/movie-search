import { Component, OnInit } from '@angular/core';
import { Model } from '../../models/model';
import { OmdbService } from '../../services/omdb.service';
import { MovieData } from '../../models/movie-data';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public inputValue: string;
  constructor(private omdbService: OmdbService, private model: Model) {}

  ngOnInit() {}

  onInputChange = (e: any) => {
    console.log(e.target.value);
    this.omdbService.search(e.target.value).subscribe((data) => {
     if (data['Error']) {
       return;
     }
     this.model.setSearchData(data['Search'] as MovieData[]);
     console.log("data set", this.model.getSearchData())
    })
  };
}
