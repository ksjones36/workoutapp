import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Workout } from './workout';
import { WorkoutService } from './workout.service';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent implements OnInit {

  id: number;
  workout: Workout = new Workout;

  constructor(
    private workoutService: WorkoutService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.getId();
  }

  getId(): number {
    return +this.route.snapshot.paramMap.get('id');
  }

  addNew(): void {
    if (this.workout.name === undefined) {
      return;
    }
    this.workout.dayId = this.id;
    this.workoutService.addWorkout(this.workout).subscribe();
  }

}
