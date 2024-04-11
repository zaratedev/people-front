import { Routes } from '@angular/router';
import { PeopleListComponent } from './people-list-component/people-list-component.component';
import { CreatePeopleComponent } from './create-people/create-people.component';

export const routes: Routes = [
    {path: 'listado', component: PeopleListComponent},
    {path: 'personas/crear', component: CreatePeopleComponent}
];
