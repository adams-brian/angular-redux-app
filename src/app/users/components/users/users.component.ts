import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  newUser: User;
  users: User[];

  constructor(private userService: UserService) {
    this.newUser = {
      firstname: '',
      lastname: ''
    };
  }

  ngOnInit() {
    this.userService.list().subscribe((users) => this.users = users);
  }

  createUser() {
    this.userService.create(this.newUser).subscribe((response) => console.log(response));
  }

  deleteUser(id) {
    this.userService.delete(id).subscribe((response) => console.log(response));
  }

}
