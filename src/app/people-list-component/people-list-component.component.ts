import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-people-list-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './people-list-component.component.html',
  styleUrl: './people-list-component.component.css'
})

export class PeopleListComponent implements OnInit {
  people?: any[];
  query: string = '';

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

  search() {
    fetch(`http://localhost:8000/api/peoples?q=${this.query}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.people = data.data;
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
