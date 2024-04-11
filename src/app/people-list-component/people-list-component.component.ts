import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-people-list-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-list-component.component.html',
  styleUrl: './people-list-component.component.css'
})

export class PeopleListComponent implements OnInit {
  people?: any[];

  constructor(private peopleService: PeopleService) { }

  async ngOnInit(): Promise<void> {
    try {
      await this.peopleService.getPeople().then(data => {
        this.people = data.data;
      })
    } catch (error) {
      console.error('Error al obtener personas:', error);
    }
  }
}
