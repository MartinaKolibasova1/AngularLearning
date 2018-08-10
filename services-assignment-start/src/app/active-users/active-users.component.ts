import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from '../users.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UsersService, private countService: CounterService) {
  }

  onSetToInactive(id: number) {
    this.userService.setToInnactive(id);
  }

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }
}
