import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddWorkoutComponent } from './workouts/add-workout.component';
import { CompareComponent } from './workouts/compare.component';
import { AddDayComponent } from './days/add-day.component';
import { WeeksComponent } from './days/weeks.component';
import { LoginComponent } from './user/login.component';
import { CreateUserComponent } from './user/create-user.component';

const routes: Routes = [
  {path: '', component: WeeksComponent},
  {path: 'add-workout/:id', component: AddWorkoutComponent},
  {path: 'compare/:name', component: CompareComponent},
  {path: 'add-day', component: AddDayComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createuser', component: CreateUserComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
