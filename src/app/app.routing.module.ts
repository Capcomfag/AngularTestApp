import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CameraComponent } from "./camera/camera.component";

const appRoutes: Routes = [
  { path: 'home', component: CameraComponent }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule {}