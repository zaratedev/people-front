import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-people',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-people.component.html',
  styleUrl: './create-people.component.css'
})
export class CreatePeopleComponent {
  name: string = '';
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  phone: string = '';
  postal_code: string = '';
  state: string = '';
  errors: any[] = [];

  createPeople() {
    const data = JSON.stringify({
      "name": this.name,
      "first_name": this.first_name,
      "last_name": this.last_name,
      "email": this.email,
      "phone": this.phone,
      "postal_code": this.postal_code,
      "state": this.state
    });

    this.errors = []

    fetch('http://localhost:8000/api/peoples', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      if (data && data.errors !== undefined) {
        this.errors = Object.values(data.errors).flat();
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
