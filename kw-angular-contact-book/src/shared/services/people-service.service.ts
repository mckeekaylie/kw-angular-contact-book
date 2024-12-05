import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeopleServiceService {
  public getPeople() {
    var f = fetch('/api/people')
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    return f;
  }
}
