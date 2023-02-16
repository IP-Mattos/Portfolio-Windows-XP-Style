import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WindowComponent } from './components/window/window.component';
import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  declarations: [AppComponent, WindowComponent, TaskbarComponent, TabComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
