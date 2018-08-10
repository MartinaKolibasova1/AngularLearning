import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UsersService, private countService: CounterService) {
  }
  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }
}
