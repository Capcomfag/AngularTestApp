import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app.routing.module';
import { CameraComponent } from "./camera/camera.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, RouterModule  ],
  declarations: [ AppComponent, HelloComponent, CameraComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
