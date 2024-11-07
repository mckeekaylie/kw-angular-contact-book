import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class PeopleServiceService {
  constructor(private http: HttpClient) {}

  public getPeople() {
    return this.http.get<Person[]>(`${environment.apiUrl}`);
  }
}
