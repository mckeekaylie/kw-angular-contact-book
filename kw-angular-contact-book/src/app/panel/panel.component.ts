import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/shared/models/person.model';
import { PeopleServiceService } from 'src/shared/services/people-service.service';
import {
  faAddressBook,
  faSortAmountUp,
  faSortAmountDown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  entries!: Array<Person>;
  entriesAlphabetical!: Array<Person>;

  @Output() personSelected: EventEmitter<Person> = new EventEmitter();
  faAddressBook = faAddressBook;
  faSortAmountUp = faSortAmountUp;
  faSortAmountDown = faSortAmountDown;

  constructor(private peopleService: PeopleServiceService) {}

  ngOnInit(): void {
    this.getPeopleDetails();
  }

  getPeopleDetails() {
    this.peopleService.getPeople().subscribe((data) => {
      this.entries = data;
      this.entriesAlphabetical = this.entries.sort(function (a, b) {
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
    });
  }

  showProfile(person: any) {
    this.personSelected.emit(person);
  }

  changeSortDesc() {
    return this.entriesAlphabetical.sort(function (a, b) {
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
  }

  changeSortAsc() {
    return this.entriesAlphabetical.sort(function (a, b) {
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
  }

  filter(event: any) {
    let search = event.target.value.toString().toUpperCase();
    if (search) {
      this.entriesAlphabetical = this.entriesAlphabetical.filter((x) =>
        x.name.toUpperCase().includes(search),
      );
    } else {
      this.getPeopleDetails();
    }
  }
}
