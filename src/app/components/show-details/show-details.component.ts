import { Component } from '@angular/core';
import { ShowData } from '../../service/show-data.service';
import { Show } from '../../model/show';

@Component({
  selector: 'app-show-details',
  standalone: true,
  imports: [],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css',
})
export class ShowDetailsComponent {
  constructor(private showData: ShowData) {}

  get show(): Show {
    return this.showData.detailShow;
  }
}
