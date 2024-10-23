import {Show} from '../model/show';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ShowData {
  private shows: Show[] = [
    new Show(1, 'Stranger Things'),
    new Show(2, 'The Crown'),
    new Show(3, 'House of Cards')
  ]

  getShows(): Show[] {
    return this.shows;
  }
}
