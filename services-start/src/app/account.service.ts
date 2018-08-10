import {LoggingService} from './logging.service';
import {EventEmitter, Injectable} from '@angular/core';
import {s} from '@angular/core/src/render3';

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingservice: LoggingService) {}
  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingservice.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
   this.accounts[id].status = status;
   this.loggingservice.logStatusChange(status);
  }
}
