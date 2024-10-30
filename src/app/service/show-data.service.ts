import { HttpClient } from '@angular/common/http';
import { Show } from '../model/show';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowData {
  private shows: Show[] = [
    new Show(1, 'Stranger Things'),
    new Show(2, 'The Crown'),
    new Show(3, 'House of Cards'),
  ];
  public detailShow: Show;

  constructor(private httpClient: HttpClient) {}

  getShows(): Show[] {
    return this.shows;
  }

  saveShow(show: Show) {
    this.shows.push(show);
  }

  saveEditShow(show: Show) {
    // goes through the shows array and replaces the show with the same id
    this.shows = this.shows.map((s) => (s.id === show.id ? { ...show } : s));
  }

  deleteShow(show: Show) {
    this.shows = this.shows.filter((s) => (s.id !== show.id ? s : null));
  }

  async showShowDetails(show: Show) {
    try {
      const data: any = await lastValueFrom(
        this.httpClient.get(
          'http://api.tvmaze.com/singlesearch/shows?q=' + show.title,
        ),
      );
      show.summary = data.summary;
      show.image = data.image.medium;
      this.detailShow = show;
      return this.detailShow;
    } catch (e) {
      alert('Es wurde leider keine passende Show gefunden!');
      return null;
    }
  }
}
