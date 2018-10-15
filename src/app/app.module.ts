import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutDetailComponent } from './workouts/workout-detail.component';
import { WorkoutService } from './workouts/workout.service';
import { DaysComponent } from './days/days.component';
import { DayService } from './days/day.service';
import { AddWorkoutComponent } from './workouts/add-workout.component';
import { AppRoutingModule } from './app-routing.module';
import { CompareComponent } from './workouts/compare.component';
import { AddDayComponent } from './days/add-day.component';
import { WeeksComponent } from './days/weeks.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { LoginComponent } from './user/login.component';
import { CreateUserComponent } from './user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutsComponent,
    WorkoutDetailComponent,
    DaysComponent,
    AddWorkoutComponent,
    CompareComponent,
    AddDayComponent,
    WeeksComponent,
    UserComponent,
    LoginComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    WorkoutService,
    DayService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
