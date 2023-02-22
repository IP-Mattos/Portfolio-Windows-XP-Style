import { Component } from '@angular/core';
import { Toggle } from '../../../util/Toggle';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent {
  constructor(public toggle: Toggle) {}
  Tittle = 'Bienvenidos a la Réplica de Windows XP/Porfolio';

  Description = 'Soy Iván Peña FullStack Developer';
  Guide =
    'Para poder navegar por la réplica puedes abrir las diferentes secciones haciendo doble click en los iconos del escritorio y si clickeas en el botón de inicio podrás ver más información sobre mí!';
  OnToggle() {
    this.toggle.state = !this.toggle.state;
  }
}
