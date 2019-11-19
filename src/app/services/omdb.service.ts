import { Injectable } from '@angular/core';
import { SearchBarModule } from '../view/search-bar/search-bar.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  private baseURL: string = 'http://www.omdbapi.com/';
  constructor(private httpClient: HttpClient) {}

  public search = (input: string) => {
    const apiKey = 'a42dd2ff';
    const url = `${this.baseURL}?s=${input}&apiKey=${apiKey}`;
    return this.httpClient.get(url);
  };
}
