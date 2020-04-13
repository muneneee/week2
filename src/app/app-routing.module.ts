import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component'
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: UserComponent},
  {path:'', component:UserComponent},
  { path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
