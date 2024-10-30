import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowListComponent } from './components/show-list/show-list.component';
import { ShowFormComponent } from './components/show-form/show-form.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ShowListComponent,
    ShowFormComponent,
    ShowDetailsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tvShows';
}
