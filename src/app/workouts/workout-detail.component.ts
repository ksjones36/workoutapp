import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Workout } from './workout';
import { WorkoutService } from './workout.service';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})
export class WorkoutDetailComponent implements OnChanges {

  @Input() workout: Workout;
  @Output() clearSelect = new EventEmitter<any>();
  @Output() updateWorkouts = new EventEmitter<any>();
  update: Workout;

  constructor(private workoutService: WorkoutService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.workout.currentValue !== undefined) {
      this.update = Object.assign({}, changes.workout.currentValue);
    }
  }

  deleteWorkout(): void {
    this.workoutService.deleteWorkout(this.workout.id).subscribe();
    setTimeout(() => this.updateWorkoutList(), 300);
  }

  saveUpdate () {
    this.workoutService.editWorkout(this.update).subscribe();
    this.updateWorkoutList();
  }

  updateWorkoutList () {
    this.updateWorkouts.emit(this.update);
    this.clearSelect.emit(null);
  }

}
