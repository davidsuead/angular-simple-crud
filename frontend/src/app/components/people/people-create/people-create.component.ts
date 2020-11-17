import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { People } from '../people.model';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-create',
  templateUrl: './people-create.component.html',
  styleUrls: ['./people-create.component.css']
})
export class PeopleCreateComponent implements OnInit {

  people: People = {
    name: '',
    cpf: '',
    email: '',
    birthdate: '',
    phone: '',
    mom: ''
  }

  constructor(private peopleService: PeopleService, private router: Router) { }

  ngOnInit(): void {
  }

  createPeople(): void {
    this.peopleService.create(this.people).subscribe(() => {
      this.peopleService.showMessage('Operação realizada com sucesso!');
      this.router.navigate(['/people']);
    })
  }

  cancel(): void {
    this.router.navigate(['/people'])
  }

}
