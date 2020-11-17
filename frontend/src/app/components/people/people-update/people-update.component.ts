import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from '../people.model';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-update',
  templateUrl: './people-update.component.html',
  styleUrls: ['./people-update.component.css']
})
export class PeopleUpdateComponent implements OnInit {

  people: People;

  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.peopleService.readById(id).subscribe(people => {
      this.people = people;
    })
  }

  updatePeople(): void {
    this.peopleService.update(this.people).subscribe(() => {
      this.peopleService.showMessage(`Os dados de "${this.people.name}" foram atualizados com sucesso!`);
      this.router.navigate(['/people']);
    })
  }

  cancel(): void {
    this.router.navigate(['/people']);
  }

}
