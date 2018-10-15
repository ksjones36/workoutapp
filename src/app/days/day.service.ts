import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Day } from './day';
import { DAYS } from './mock-days';

@Injectable()
export class DayService {

  constructor(private http: HttpClient) { }

  private dayUrl = 'api/days';

  days: Day[] = DAYS;

  addDay(day: Day): Observable<Day> {
    const d = new Date(day.date);
    const dayNum = d.getDay();

    switch (dayNum) {
      case 0: day.dayName = 'Monday'; break;
      case 1: day.dayName = 'Tuesday'; break;
      case 2: day.dayName = 'Wednesday'; break;
      case 3: day.dayName = 'Thursday'; break;
      case 4: day.dayName = 'Friday'; break;
      case 5: day.dayName = 'Saturday'; break;
      case 6: day.dayName = 'Sunday'; break;
      default: break;
    }
    day.week = 3;
    return this.http.post<Day>(this.dayUrl, day);
  }

  getDays(): Observable<Day[]> {
    return this.http.get<Day[]>(this.dayUrl);
  }

  getDaysByWeek(week: number): Observable<Day[]> {
    const url = `${this.dayUrl}/${week}`;
    return this.http.get<Day[]>(url);
  }

  getWeeks(): Observable<number[]> {
    return this.http.get<number[]>(this.dayUrl + '/weeks');
  }

  deleteDay(id: number): Observable<Day> {
    const url = `${this.dayUrl}/${id}`;
    return this.http.delete<Day>(url);
  }

}
