import { Component } from '@angular/core';
import { languages } from 'src/models/languages';
@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css'],
})
export class StartMenuComponent {
  listlang: languages[] = [
    { name: 'HTML', icon: '../../../assets/img/code/html-icon.svg' },
    {
      name: 'CSS',
      icon: '../../../assets/img/code/css-icon.svg',
    },
    {
      name: 'JavaScript',
      icon: '../../../assets/img/code/javascript-icon.svg',
    },
    {
      name: 'TypeScript',
      icon: '../../../assets/img/code/typescript-icon.svg',
    },
    { name: 'Angular', icon: '../../../assets/img/code/angular-icon.svg' },
    { name: 'React', icon: '../../../assets/img/code/react-js-icon.svg' },
    { name: 'NodeJS', icon: '../../../assets/img/code/node-js-icon.svg' },
    { name: 'Express', icon: '../../../assets/img/code/express-js-icon.svg' },
    { name: 'MongoDB', icon: '../../../assets/img/code/mongodb-icon.svg' },
    { name: 'Sequelize', icon: '../../../assets/img/code/sequelize-icon.svg' },
    { name: 'Postgress', icon: '../../../assets/img/code/postgresql-icon.svg' },
  ];
}
