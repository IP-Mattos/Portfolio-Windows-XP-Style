import { Component } from '@angular/core';
import { Toggle } from '../../../util/Toggle';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css'],
})
export class TaskbarComponent {
  hour = '';
  minute = '';
  second = '';
  meridiem = '';
  time = '';
  show = false;

  constructor(public toggle: Toggle) {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }
  OnToggle() {
    this.toggle.state = !this.toggle.state;
  }
  OnShow() {
    this.show = !this.show;
  }
  updateTime() {
    const date = new Date();
    let hours = date.getHours();
    let meridiem = '';

    if (hours > 12) {
      hours -= 12;
      meridiem = 'PM';
    } else {
      meridiem = 'AM';
    }

    this.hour = ('0' + hours).slice(-2);
    this.minute = ('0' + date.getMinutes()).slice(-2);
    this.second = ('0' + date.getSeconds()).slice(-2);
    this.meridiem = meridiem;
    this.time = `${this.hour}:${this.minute}:${this.second} ${this.meridiem}`;
  }
}
