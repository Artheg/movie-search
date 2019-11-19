import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieData } from '../../../models/movie-data';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input()
  data: MovieData;

  @Input()
  isSaved: boolean;

  @Output()
  buttonClickEvent: EventEmitter<MovieData> = new EventEmitter<MovieData>();

  ngOnInit(): void {}

  goToLink = () => {
    window.open(`https://imdb.com/title/${this.data.imdbID}`);
  };

  onButtonClick = () => {
    this.buttonClickEvent.emit(this.data);
  };
}
