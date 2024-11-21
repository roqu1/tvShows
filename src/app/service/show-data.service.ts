import { HttpClient } from '@angular/common/http';
import { Show } from '../model/show';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ShowData {
  private shows: Observable<Show[]>;
  public detailShow: Show;
  private series = 'table_show';

  constructor(
    private httpClient: HttpClient,
    private af: AngularFirestore,
  ) {
    this.shows = this.af
      .collection<Show>(this.series)
      .valueChanges({ idField: 'uid' }) as Observable<Show[]>;
  }

  getShows(): Observable<Show[]> {
    return this.shows;
  }

  async saveShow(show: Show) {
    try {
      const data: any = await lastValueFrom(
        this.httpClient.get(
          'http://api.tvmaze.com/singlesearch/shows?q=' + show.title,
        ),
      );

      if (data.name != null) {
        return this.af.collection(this.series).add({
          id: show.id,
          title: show.title,
        });
      }
      return null;
    } catch (e) {
      alert('Es wurde leider keine passende Show gefunden!');
      return null;
    }
  }

  saveEditShow(show: Show) {
    return this.af.collection(this.series).doc(show.uid).update({
      id: show.id,
      title: show.title,
    });
  }

  deleteShow(show: Show) {
    return this.af.collection(this.series).doc(show.uid).delete();
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
