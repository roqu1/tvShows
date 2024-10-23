import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ShowListComponent} from './components/show-list/show-list.component';
import {ShowFormComponent} from './components/show-form/show-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShowListComponent, ShowFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tvShows';
}
