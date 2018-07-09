import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export interface User {
  firstname: string;
  lastname: string;
}

@Injectable()
export class UserService {
  private readonly url: string;

  constructor(private http: Http) {
    this.url = 'http://localhost:4000';
   }

  list() {
    return this.http.get(this.url + '/users')
     .map(res => res.json().data);
  }

  get(id: string) {
    return this.http.get(this.url + '/users/' + id)
      .map(res => res.json().data);
  }

  create(user: User) {
    return this.http.put(this.url + '/users', user)
      .map(res => res.json());
  }

  delete(id: string) {
    return this.http.delete(this.url + '/users/' + id)
      .map(res => res.json());
  }

}
