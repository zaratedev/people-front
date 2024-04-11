import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  async getPeople() {
    try {
      const response = await fetch('http://localhost:8000/api/peoples');
      if (!response.ok) {
        throw new Error('Error al obtener personas');
      }
      return await response.json() ?? [];
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}
