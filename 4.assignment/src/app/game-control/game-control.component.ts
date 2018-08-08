import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  incrementingNumber = 0;
  interval;

  constructor() { }

  ngOnInit() {
  }

  onGameStarted() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.incrementingNumber + 1);
      this.incrementingNumber++;
    }, 1000);
  }

  onGamePaused() {
    clearInterval(this.interval);
  }
}
