import { Component } from '@angular/core';
import { Toggle } from '../../../util/Toggle';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent {
  constructor(public toggle: Toggle) {}

  OnToggle() {
    this.toggle.state = !this.toggle.state;
  }
}
