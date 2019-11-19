import { Injectable } from '@angular/core';

export class MovieData {
  public Title: string;
  public Year: string;
  public imdbID: string;
  public Type: 'movie' | 'series';
  public Poster: string;
}
