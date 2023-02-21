import { Component } from '@angular/core';
import { Toggle } from '../../../util/Toggle';
import { projects } from 'src/models/projects';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css'],
})
export class FolderComponent {
  constructor(public toggle: Toggle) {}
  listProjects: projects[] = [
    {
      name: 'Dogs Pi',
      icon: '../../../assets/img/318(48x48).png',
      description: 'React,Redux,Router Dom ,Node,Express,Sequelize,Postgress',
      url: 'https://github.com/IP-Mattos/Dogs-Api',
    },
    {
      name: 'BMI',
      icon: '../../../assets/img/318(48x48).png',
      description: 'Angular',
      url: 'https://bmi-calculator-ip.netlify.app/',
    },
    {
      name: 'Synnet',
      icon: '../../../assets/img/318(48x48).png',
      description: 'React,Redux,Router Dom ,Node,Express,Sequelize,Postgress',
      url: 'https://github.com/Nicrosi/Proyecto-Final',
    },
    {
      name: 'Musto',
      icon: '../../../assets/img/318(48x48).png',
      description: 'Html, Css, Javascript',
      url: 'https://github.com/IP-Mattos/musto',
    },
    {
      name: 'Intervial',
      icon: '../../../assets/img/318(48x48).png',
      description: 'Html, Css, Javascript',
      url: 'http://www.intervial.com.uy/',
    },
  ];
  OnToggle() {
    this.toggle.isfolder = !this.toggle.isfolder;
    this.toggle.state = !this.toggle.state;
  }
}
