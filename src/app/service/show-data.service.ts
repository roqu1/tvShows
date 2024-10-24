import { Show } from '../model/show';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowData {
  private shows: Show[] = [
    new Show(1, 'Stranger Things'),
    new Show(2, 'The Crown'),
    new Show(3, 'House of Cards'),
  ];

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
}
