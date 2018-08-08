import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
 //  template: // `<app-server></app-server> <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowNewUser = false;
  serverCreation = 'No server was created!';
  serverName ='TestServer';
  userName = '';
  serverCreated = false;
  servers = ['TestServer', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreation = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  check() {
    if(this.userName === ''){
      this.allowNewUser = false;
    }
    else
      this.allowNewUser = true;
  }

  resetString() {
    this.allowNewUser = false;
    this.userName = '';
  }
}
