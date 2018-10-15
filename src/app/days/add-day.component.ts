import { Component, OnInit } from '@angular/core';
import { DayService } from './day.service';
import { Day } from './day';
import { Workout } from '../workouts/workout';
import { WorkoutService } from '../workouts/workout.service';

@Component({
  selector: 'app-add-day',
  templateUrl: './add-day.component.html',
  styleUrls: ['./add-day.component.css']
})
export class AddDayComponent implements OnInit {

  day: Day = new Day;
  workouts: Workout[] = [];
  dayId: number;

  constructor(
    private dayService: DayService,
    private workoutService: WorkoutService
  ) { }

  ngOnInit() {
    this.workouts.push(new Workout);
  }

  addWorkout() {
    this.workouts.push(new Workout);
  }

  clearWorkout() {
    this.workouts.pop();
  }

  addNew(): void {
    if (this.day.date !== undefined) {
      this.dayService.addDay(this.day).subscribe((day) => {
        const dayId = day.id;
        this.workoutService.addWorkouts(this.workouts, dayId).subscribe();
      });
    }
  }
}
