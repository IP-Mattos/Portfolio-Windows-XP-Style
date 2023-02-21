import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Toggle {
  state = true;
  isfolder = false;
}
