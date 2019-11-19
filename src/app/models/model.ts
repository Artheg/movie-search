import { Injectable } from '@angular/core';
import { MovieData } from './movie-data';

export type MovieDataDict = {
  [key: string]: MovieData;
};

@Injectable()
export class Model {
  private isLoading;
  private searchData: MovieData[] = [];
  private savedData: MovieDataDict;

  constructor() {
    this.savedData = this.getLocalStorageData();
  }

  public getIsLoading(): boolean {
    return this.isLoading;
  }

  public setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  private getLocalStorageData(): MovieDataDict {
    const result: MovieDataDict = {};
    for (let i = 0, len = localStorage.length; i < len; ++i) {
      const key = localStorage.key(i);
      const rawData = localStorage.getItem(key);
      result[key] = JSON.parse(rawData);
    }
    return result;
  }

  public checkIfDataSaved(data: MovieData) {
    return this.savedData[data.imdbID] !== undefined;
  }

  public saveToLocalStorage(data: MovieData) {
    console.log('Pushing saved data', data);
    this.savedData[data.imdbID] = data;
    console.table(this.savedData);
    localStorage.setItem(data.imdbID, JSON.stringify(data));
  }

  public removeFromLocalStorage(data: MovieData) {
    delete this.savedData[data.imdbID];
    localStorage.removeItem(data.imdbID);
  }

  public setSearchData(value: MovieData[]) {
    this.searchData = value;
  }

  public getSavedDataArray(): MovieData[] {
    const result = [];
    const keys = Object.keys(this.savedData);
    for (const key of keys) {
      const data = this.savedData[key];
      result.push(data);
    }
    return result;
  }

  public getSearchData(): MovieData[] {
    return this.searchData;
  }
}
