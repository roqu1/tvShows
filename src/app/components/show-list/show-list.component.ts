import { Component } from '@angular/core';
import { Show } from '../../model/show';
import {NgForOf} from '@angular/common';
import { ShowData } from "../../service/show-data.service";

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})
export class ShowListComponent {
  shows: Show[] = [];

  constructor(private showData: ShowData) {
  }

  ngOnInit() {
    this.shows = this.showData.getShows();
  }

}
