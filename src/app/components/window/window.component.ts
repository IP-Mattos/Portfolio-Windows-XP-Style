import { Component } from '@angular/core';
import { Toggle } from '../../../util/Toggle';
import { socials } from 'src/models/social';
@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css'],
})
export class WindowComponent {
  constructor(public toggle: Toggle) {}
  listSocial: socials[] = [
    {
      name: 'Git Hub',
      icon: '../../../assets/img/social/github-icon.svg',
      url: 'https://github.com/IP-Mattos',
    },
    {
      name: 'Linkedin',
      icon: '../../../assets/img/social/linkedin-icon.svg',
      url: 'https://www.linkedin.com/in/iv%C3%A1n-ignacio-pe%C3%B1a-mattos-fullstack/',
    },
    {
      name: 'Email',
      icon: '../../../assets/img/social/gmail-icon.svg',
      url: 'mailto:ipmattoscontactos@gmail.com?Subject=Contacto',
    },
    {
      name: 'Cv',
      icon: '../../../assets/img/social/pdf-icon.svg',
      url: 'https://drive.google.com/file/d/1AWXvl6FHJQq_fNq5qP0paELTOIKBABE5/view?usp=share_link',
    },
  ];
  OnToggle(event: any) {
    if (!this.toggle.state || (!this.toggle.isfolder && !this.toggle.state)) {
      if (event.target.id === 'folder') {
        this.toggle.isfolder = !this.toggle.isfolder;
      }
      this.toggle.state = !this.toggle.state;
    } else {
      this.toggle.isfolder = false;
      this.toggle.state = false;
    }
  }
}
