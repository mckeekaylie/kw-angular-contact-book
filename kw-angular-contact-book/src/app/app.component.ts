import { Component, OnInit } from '@angular/core';
import { Person } from 'src/shared/models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'kw-angular-contact-book';
  personToShow!: Person;

  constructor() {}

  ngOnInit(): void {
    this.getProfile(0);
  }

  getProfile(person: any) {
    this.personToShow = person;
  }
}
