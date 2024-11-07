import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/shared/models/person.model';
import {
  faGraduationCap,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() personToShow!: Person;

  faGraduationCap = faGraduationCap;
  faBriefcase = faBriefcase;

  constructor() {}

  ngOnInit(): void {}
}
