import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component'
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: UserComponent},
  {path: '**', component: AppComponent},

  { path: '', redirectTo:"/user",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
