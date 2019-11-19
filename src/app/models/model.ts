import { Injectable } from '@angular/core';
import { MovieData } from './movie-data';

@Injectable()
export class Model {
  private searchData: MovieData[] = [];
  private savedData: MovieData[];

  constructor() {
    this.savedData = this.getLocalStorageData();
  }

  private getLocalStorageData(): MovieData[] {
    const result: MovieData[] = [];
    for (let i = 0, len = localStorage.length; i < len; ++i) {
      const key = localStorage.key(i);
      const rawData = localStorage.getItem(key);
      result.push(JSON.parse(rawData));
    }
    return result;
  }

  public saveToLocalStorage(data: MovieData) {
    this.savedData.push(data);
    localStorage.setItem(data.imdbID, JSON.stringify(data));
  }

  public removeFromLocalStorage(data: MovieData) {
    const index = this.savedData.indexOf(data);
    this.savedData.splice(index, 1);
    localStorage.removeItem(data.imdbID);
  }

  public setSearchData(value: MovieData[]) {
    this.searchData = value;
  }

  public getSavedData(): MovieData[] {
    return this.savedData;
  }

  public getSearchData(): MovieData[] {
    // return this.data;
    return [
      {
        Title: 'O Brother, Where Art Thou?',
        Year: '2000',
        imdbID: 'tt0190590',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMjZkOTdmMWItOTkyNy00MDdjLTlhNTQtYzU3MzdhZjA0ZDEyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
      },
      {
        Title: 'The Art of Getting By',
        Year: '2011',
        imdbID: 'tt1645080',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNDg3NzE5MjU3MV5BMl5BanBnXkFtZTcwNjY1NTgxNQ@@._V1_SX300.jpg'
      },
      {
        Title: 'Sword Art Online',
        Year: '2012–',
        imdbID: 'tt2250192',
        Type: 'series',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BYjY4MDU2YjMtNzY1MC00ODg1LWIwMzYtMWE5YTA3YTI4ZjMxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
      },
      {
        Title: 'Sword Art Online',
        Year: '2012–',
        imdbID: 'tt2250192',
        Type: 'series',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNTIzMzkzMzEtMjU5OC00NTUzLTkxOGItMGU1NTdjZTE0YjE1XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg'
      },
      {
        Title: 'The Art of War',
        Year: '2000',
        imdbID: 'tt0160009',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNzAyMjE2MDI3M15BMl5BanBnXkFtZTYwNTIwMzg2._V1_SX300.jpg'
      },
      {
        Title: 'The Art of the Steal',
        Year: '2013',
        imdbID: 'tt2172985',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNjUxNjYyNTUxMF5BMl5BanBnXkFtZTgwNDgyMDcyMTE@._V1_SX300.jpg'
      },
      {
        Title: 'Art School Confidential',
        Year: '2006',
        imdbID: 'tt0364955',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMjA2Nzg0NjQwM15BMl5BanBnXkFtZTcwODgxNDgzMQ@@._V1_SX300.jpg'
      },
      {
        Title: 'The Art of Self-Defense',
        Year: '2019',
        imdbID: 'tt7339248',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BZDlkOGE4YTUtYWRlZS00YjFkLWE3NmUtNzNlNjdiZTk2NzdhXkEyXkFqcGdeQXVyNDY2MjcyOTQ@._V1_SX300.jpg'
      },
      {
        Title: 'High Art',
        Year: '1998',
        imdbID: 'tt0139362',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMGY4NTRmN2ItMDFkMS00YjY4LWFlZWEtZGFkYjRjODE2OTA4XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg'
      },
      {
        Title: 'The Art of Flight',
        Year: '2011',
        imdbID: 'tt1646967',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTc1NjUwMDU1MF5BMl5BanBnXkFtZTcwMzU5NjA4OA@@._V1_SX300.jpg'
      },
      {
        Title: 'O Brother, Where Art Thou?',
        Year: '2000',
        imdbID: 'tt0190590',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMjZkOTdmMWItOTkyNy00MDdjLTlhNTQtYzU3MzdhZjA0ZDEyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
      },
      {
        Title: 'The Art of Getting By',
        Year: '2011',
        imdbID: 'tt1645080',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNDg3NzE5MjU3MV5BMl5BanBnXkFtZTcwNjY1NTgxNQ@@._V1_SX300.jpg'
      },
      {
        Title: 'Sword Art Online',
        Year: '2012–',
        imdbID: 'tt2250192',
        Type: 'series',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BYjY4MDU2YjMtNzY1MC00ODg1LWIwMzYtMWE5YTA3YTI4ZjMxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
      },
      {
        Title: 'Sword Art Online',
        Year: '2012–',
        imdbID: 'tt2250192',
        Type: 'series',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNTIzMzkzMzEtMjU5OC00NTUzLTkxOGItMGU1NTdjZTE0YjE1XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg'
      },
      {
        Title: 'The Art of War',
        Year: '2000',
        imdbID: 'tt0160009',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNzAyMjE2MDI3M15BMl5BanBnXkFtZTYwNTIwMzg2._V1_SX300.jpg'
      },
      {
        Title: 'The Art of the Steal',
        Year: '2013',
        imdbID: 'tt2172985',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNjUxNjYyNTUxMF5BMl5BanBnXkFtZTgwNDgyMDcyMTE@._V1_SX300.jpg'
      },
      {
        Title: 'Art School Confidential',
        Year: '2006',
        imdbID: 'tt0364955',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMjA2Nzg0NjQwM15BMl5BanBnXkFtZTcwODgxNDgzMQ@@._V1_SX300.jpg'
      },
      {
        Title: 'The Art of Self-Defense',
        Year: '2019',
        imdbID: 'tt7339248',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BZDlkOGE4YTUtYWRlZS00YjFkLWE3NmUtNzNlNjdiZTk2NzdhXkEyXkFqcGdeQXVyNDY2MjcyOTQ@._V1_SX300.jpg'
      },
      {
        Title: 'High Art',
        Year: '1998',
        imdbID: 'tt0139362',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMGY4NTRmN2ItMDFkMS00YjY4LWFlZWEtZGFkYjRjODE2OTA4XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg'
      },
      {
        Title: 'The Art of Flight',
        Year: '2011',
        imdbID: 'tt1646967',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTc1NjUwMDU1MF5BMl5BanBnXkFtZTcwMzU5NjA4OA@@._V1_SX300.jpg'
      },
      {
        Title: 'O Brother, Where Art Thou?',
        Year: '2000',
        imdbID: 'tt0190590',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMjZkOTdmMWItOTkyNy00MDdjLTlhNTQtYzU3MzdhZjA0ZDEyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
      },
      {
        Title: 'The Art of Getting By',
        Year: '2011',
        imdbID: 'tt1645080',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNDg3NzE5MjU3MV5BMl5BanBnXkFtZTcwNjY1NTgxNQ@@._V1_SX300.jpg'
      },
      {
        Title: 'Sword Art Online',
        Year: '2012–',
        imdbID: 'tt2250192',
        Type: 'series',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BYjY4MDU2YjMtNzY1MC00ODg1LWIwMzYtMWE5YTA3YTI4ZjMxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
      },
      {
        Title: 'Sword Art Online',
        Year: '2012–',
        imdbID: 'tt2250192',
        Type: 'series',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNTIzMzkzMzEtMjU5OC00NTUzLTkxOGItMGU1NTdjZTE0YjE1XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg'
      },
      {
        Title: 'The Art of War',
        Year: '2000',
        imdbID: 'tt0160009',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNzAyMjE2MDI3M15BMl5BanBnXkFtZTYwNTIwMzg2._V1_SX300.jpg'
      },
      {
        Title: 'The Art of the Steal',
        Year: '2013',
        imdbID: 'tt2172985',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNjUxNjYyNTUxMF5BMl5BanBnXkFtZTgwNDgyMDcyMTE@._V1_SX300.jpg'
      },
      {
        Title: 'Art School Confidential',
        Year: '2006',
        imdbID: 'tt0364955',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMjA2Nzg0NjQwM15BMl5BanBnXkFtZTcwODgxNDgzMQ@@._V1_SX300.jpg'
      },
      {
        Title: 'The Art of Self-Defense',
        Year: '2019',
        imdbID: 'tt7339248',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BZDlkOGE4YTUtYWRlZS00YjFkLWE3NmUtNzNlNjdiZTk2NzdhXkEyXkFqcGdeQXVyNDY2MjcyOTQ@._V1_SX300.jpg'
      },
      {
        Title: 'High Art',
        Year: '1998',
        imdbID: 'tt0139362',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMGY4NTRmN2ItMDFkMS00YjY4LWFlZWEtZGFkYjRjODE2OTA4XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg'
      },
      {
        Title: 'The Art of Flight',
        Year: '2011',
        imdbID: 'tt1646967',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTc1NjUwMDU1MF5BMl5BanBnXkFtZTcwMzU5NjA4OA@@._V1_SX300.jpg'
      },
      {
        Title: 'O Brother, Where Art Thou?',
        Year: '2000',
        imdbID: 'tt0190590',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMjZkOTdmMWItOTkyNy00MDdjLTlhNTQtYzU3MzdhZjA0ZDEyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
      },
      {
        Title: 'The Art of Getting By',
        Year: '2011',
        imdbID: 'tt1645080',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNDg3NzE5MjU3MV5BMl5BanBnXkFtZTcwNjY1NTgxNQ@@._V1_SX300.jpg'
      },
      {
        Title: 'Sword Art Online',
        Year: '2012–',
        imdbID: 'tt2250192',
        Type: 'series',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BYjY4MDU2YjMtNzY1MC00ODg1LWIwMzYtMWE5YTA3YTI4ZjMxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
      },
      {
        Title: 'Sword Art Online',
        Year: '2012–',
        imdbID: 'tt2250192',
        Type: 'series',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNTIzMzkzMzEtMjU5OC00NTUzLTkxOGItMGU1NTdjZTE0YjE1XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg'
      },
      {
        Title: 'The Art of War',
        Year: '2000',
        imdbID: 'tt0160009',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNzAyMjE2MDI3M15BMl5BanBnXkFtZTYwNTIwMzg2._V1_SX300.jpg'
      },
      {
        Title: 'The Art of the Steal',
        Year: '2013',
        imdbID: 'tt2172985',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNjUxNjYyNTUxMF5BMl5BanBnXkFtZTgwNDgyMDcyMTE@._V1_SX300.jpg'
      },
      {
        Title: 'Art School Confidential',
        Year: '2006',
        imdbID: 'tt0364955',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMjA2Nzg0NjQwM15BMl5BanBnXkFtZTcwODgxNDgzMQ@@._V1_SX300.jpg'
      },
      {
        Title: 'The Art of Self-Defense',
        Year: '2019',
        imdbID: 'tt7339248',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BZDlkOGE4YTUtYWRlZS00YjFkLWE3NmUtNzNlNjdiZTk2NzdhXkEyXkFqcGdeQXVyNDY2MjcyOTQ@._V1_SX300.jpg'
      },
      {
        Title: 'High Art',
        Year: '1998',
        imdbID: 'tt0139362',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMGY4NTRmN2ItMDFkMS00YjY4LWFlZWEtZGFkYjRjODE2OTA4XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg'
      },
      {
        Title: 'The Art of Flight',
        Year: '2011',
        imdbID: 'tt1646967',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTc1NjUwMDU1MF5BMl5BanBnXkFtZTcwMzU5NjA4OA@@._V1_SX300.jpg'
      }
    ];
  }
}
