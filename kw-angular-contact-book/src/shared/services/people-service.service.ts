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
    var f = fetch('/api/people')
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    return f;
    // return this.http.get<any>(`${environment.apiUrl}`);
  }
}
// fetch('/api/hello').then(res => res.json()).then(data => {
//   console.log(data.msg) // 'hello world'
// })
