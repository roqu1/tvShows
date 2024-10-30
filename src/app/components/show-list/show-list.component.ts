import { Component } from '@angular/core';
import { Show } from '../../model/show';
import { NgForOf, NgIf } from '@angular/common';
import { ShowData } from '../../service/show-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [NgForOf, NgIf, FormsModule],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css',
})
export class ShowListComponent {
  shows: Show[] = [];
  editShow: Show;

  constructor(private showData: ShowData) {}

  ngOnInit() {
    this.shows = this.showData.getShows();
  }

  edit(show: Show) {
    this.editShow = { ...show };
  }

  delete(show: Show) {
    this.showData.deleteShow(show);
    this.shows = this.showData.getShows();
  }

  toEdit(show: Show): boolean {
    if (!this.editShow) {
      return false;
    } else if (this.editShow.id !== show.id) {
      return false;
    } else {
      return true;
    }
  }

  saveEdit(): void {
    if (this.editShow) {
      this.showData.saveEditShow(this.editShow);
      this.editShow = null;
    }
  }

  showDetails(show: Show): void {
    this.showData.showShowDetails(show);
  }
}
