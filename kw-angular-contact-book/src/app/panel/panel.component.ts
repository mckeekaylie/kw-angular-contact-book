import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/shared/models/person.model';
import { PeopleServiceService } from 'src/shared/services/people-service.service';
import {
  faAddressBook,
  faSortAmountUp,
  faSortAmountDown,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  entries!: Array<Person>;

  private contactsAbc = new BehaviorSubject<Person[] | null>(null);
  contactsAbc$ = this.contactsAbc.asObservable();

  @Output() personSelected: EventEmitter<Person> = new EventEmitter();

  faAddressBook = faAddressBook;
  faSortAmountUp = faSortAmountUp;
  faSortAmountDown = faSortAmountDown;
  faSearch = faSearch;

  get contacts(): Person[] | null {
    return this.contactsAbc.value;
  }

  set contacts(contacts: Person[]) {
    this.contactsAbc.next(contacts);
  }

  constructor(private peopleService: PeopleServiceService) {}

  ngOnInit(): void {
    this.peopleService.getPeople().then((data) => {
      this.entries = data.people;
      this.getContacts();
      this.personSelected.emit(data.people[0]);
    });
  }

  getContacts() {
    const sortedContacts = this.entries.sort(function (a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    this.contacts = sortedContacts;
  }

  showProfile(person: Person) {
    this.personSelected.emit(person);
  }

  changeSortDesc() {
    if (this.contacts) {
      const sortedContactsDesc = this.contacts.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });

      this.contacts = sortedContactsDesc;
    }
  }

  changeSortAsc() {
    if (this.contacts) {
      const sortedContactsDesc = this.contacts.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      this.contacts = sortedContactsDesc;
    }
  }

  filter(event: any) {
    let search = event.target.value.toString().toUpperCase();

    if (this.contacts) {
      this.getContacts();
      const filteredContacts = this.contacts.filter((x) =>
        x.name.toUpperCase().includes(search),
      );
      this.contacts = filteredContacts;
    }
  }
}
