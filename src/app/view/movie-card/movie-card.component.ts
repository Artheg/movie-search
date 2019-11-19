import { Component, OnInit, Input } from '@angular/core';
import { MovieData } from '../../models/movie-data';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input()
  data: MovieData;
  
  ngOnInit(): void {
  }
  constructor() {
  }

  goToLink = () => {
    window.open(`https://imdb.com/title/${this.data.imdbID}`)
  }
}
