import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Workout } from './workout';
import { WorkoutService } from './workout.service';


@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  name: string;
  workouts: Workout[] = [];


  constructor(
    private workoutService: WorkoutService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name = this.getName();
    this.getWorkouts();
  }

  getName(): string {
    return this.route.snapshot.paramMap.get('name');
  }

  getWorkouts(): void {
    this.workoutService.getWorkoutsByName(this.name)
          .subscribe(workouts => this.workouts = workouts);
  }
}
