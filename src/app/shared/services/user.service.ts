import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/users.model';

const URL_USERS = `${environment.URL_API}/usuarios`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>(environment.URL_API, {name: user.name, email: user.email});
  }

  listUser(): Observable<User[]> {
    return this.http.get<User[]>(URL_USERS);
  }
}
