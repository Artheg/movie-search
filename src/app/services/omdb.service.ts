import { Injectable } from '@angular/core';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { HttpClient } from '@angular/common/http';
import { MovieData } from '../models/movie-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  private baseURL: string = 'http://www.omdbapi.com/'
  constructor(private httpClient: HttpClient) {}

  public search = (input: string) => {
    const apiKey = 'a42dd2ff'
    const url = `${this.baseURL}?s=${input}&apiKey=${apiKey}`;
    return this.httpClient.get(url);
  };
}
