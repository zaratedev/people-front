import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeopleListComponent } from './people-list-component/people-list-component.component'
import { CreatePeopleComponent } from './create-people/create-people.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'people-front';
}
