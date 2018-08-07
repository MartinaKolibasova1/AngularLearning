import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-assignment',
  templateUrl: './third-assignment.component.html',
  styleUrls: ['./third-assignment.component.css']
})
export class ThirdAssignmentComponent implements OnInit {
  displayed = false;
  logs = [];
  number = 0;
  blue = false;

  constructor() { }

  ngOnInit() {
  }

  display() {
    this.displayed = !this.displayed;
    this.number++;
    //this.logs.push(this.number);
    this.logs.push(new Date());
    if (this.number > 5)
    {

    }
  }
}
