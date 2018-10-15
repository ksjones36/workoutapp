import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Workout } from './workout';

@Injectable()
export class WorkoutService {

  constructor(private http: HttpClient) { }

  private workoutUrl = 'api/workouts';

  addWorkout(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>(this.workoutUrl, workout);
  }

  addWorkouts(workouts: Workout[], dayId: number): Observable<Workout[]> {
    const url = `${this.workoutUrl}/multiple`;
    const list = workouts.filter((workout) => {
      workout.dayId = dayId;
      return workout.name !== undefined && workout.name !== '';
    });
    return this.http.post<Workout[]>(url, list);
  }

  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.workoutUrl);
  }

  getWorkoutsById(id: number): Observable<Workout[]> {
    const url = `${this.workoutUrl}/${id}`;
    return this.http.get<Workout[]>(url);
  }

  getWorkoutsByName(name: string): Observable<Workout[]> {
    const url = `${this.workoutUrl}/${name}`;
    return this.http.get<Workout[]>(url);
  }

  editWorkout(workout: Workout): Observable<Workout> {
    const url = `${this.workoutUrl}/${workout.id}`;
    return this.http.put<Workout>(url, workout);
  }

  deleteWorkout(id: number): Observable<Workout> {
    const url = `${this.workoutUrl}/${id}`;
    return this.http.delete<Workout>(url);
  }

  deleteWorkoutsByDayId(dayId: number): Observable<Workout> {
    const url = `${this.workoutUrl}/multiple/${dayId}`;
    return this.http.delete<Workout>(url);
  }

}
