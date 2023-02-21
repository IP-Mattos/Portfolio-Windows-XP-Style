export class projects {
  name: string;
  icon: string;
  description: string;
  url: string;

  constructor(name: string, icon: string, description: string, url: string) {
    this.name = name;
    this.icon = icon;
    this.description = description;
    this.url = url;
  }
}
