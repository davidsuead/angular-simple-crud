import { Component, OnInit } from '@angular/core';
import { People } from '../people.model';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-read',
  templateUrl: './people-read.component.html',
  styleUrls: ['./people-read.component.css']
})
export class PeopleReadComponent implements OnInit {

  people: People[];
  displayedColumns = ['id', 'name', 'cpf', 'email', 'birthdate', 'phone', 'mom', 'action'];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.read().subscribe(people => {
      this.people = people;
    })
  }

}
