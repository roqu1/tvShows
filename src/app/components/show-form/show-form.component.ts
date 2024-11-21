import { Component } from '@angular/core';
import { Show } from '../../model/show';
import { ShowData } from '../../service/show-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './show-form.component.html',
  styleUrl: './show-form.component.css',
})
export class ShowFormComponent {
  show: Show;

  constructor(private showData: ShowData) {
    this.show = new Show(null, null, null);
  }

  save() {
    this.showData.saveShow(this.show);
    this.show = new Show(null, null, null);
  }
}
