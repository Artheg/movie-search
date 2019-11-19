export class MovieData {
  public readonly title: string;
  public readonly year: string;
  public readonly imdbID: string;
  public readonly type: 'movie' | 'series';
  public readonly posterURL: string;

  constructor(data: object) {
    this.title = data['Title'];
    this.year = data['Year'];
    this.imdbID = data['imdbID'];
    this.type = data['Type'];
    this.posterURL = data['Poster'];
  }
}
