import { Component, OnInit, Input } from '@angular/core';

import { Day } from './day';
import { DayService } from './day.service';
import { WorkoutService } from '../workouts/workout.service';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent {

  @Input() week: number;
  allDays: Day[];
  days: Day[] = [];
  constructor(
    private dayService: DayService,
    private workoutService: WorkoutService
  ) { }

  getDaysByWeek(week: number) {
    this.days = [];
    this.dayService.getDaysByWeek(week)
          .subscribe(days => this.days = days);
  }

  deleteDay(day: Day): void {
    this.workoutService.deleteWorkoutsByDayId(day.id).subscribe(() => {
      this.dayService.deleteDay(day.id).subscribe(() => {
        this.getDaysByWeek(this.week);
      });
    });
  }
}
