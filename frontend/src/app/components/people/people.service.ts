import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from 'rxjs';
import { People } from './people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  baseUrl = 'http://localhost:3000/people';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(people: People): Observable<People> {
    return this.http.post<People>(this.baseUrl, people);
  }
}
