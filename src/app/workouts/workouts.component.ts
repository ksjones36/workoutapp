import { Component, OnInit, Input } from '@angular/core';
import { Workout } from './workout';
import { WorkoutService } from './workout.service';
import { Day } from '../days/day';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {

  @Input() day: Day;
  selectedWorkout: Workout;
  workouts: Workout[] = [];

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.getWorkoutsById();
  }

  getWorkoutsById() {
    this.workouts = [];
    this.workoutService.getWorkoutsById(this.day.id)
          .subscribe(workouts => this.workouts = workouts);
  }

  onSelect(workout: Workout): void {
    this.selectedWorkout = workout;
  }

  clearSelectedWorkout($event) {
    this.selectedWorkout = $event;
  }
}

