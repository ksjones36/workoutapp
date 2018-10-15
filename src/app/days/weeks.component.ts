import { Component, OnInit, ViewChild } from '@angular/core';
import { DayService } from './day.service';
import { DaysComponent } from './days.component';

@Component({
  selector: 'app-weeks',
  templateUrl: './weeks.component.html',
  styleUrls: ['./weeks.component.css']
})
export class WeeksComponent implements OnInit {

  @ViewChild(DaysComponent) child: DaysComponent;
  weeks: number[] = [];
  selectedWeek: number;

  constructor(private dayService: DayService) { }

  ngOnInit() {
    this.getWeeks();
  }

  getWeeks(): void {
    this.weeks = [];
    this.dayService.getWeeks()
          .subscribe((weeks) => {
            this.weeks = weeks;
            this.selectedWeek = this.weeks[0];
            this.selectWeek(this.selectedWeek);
          });
  }

  selectWeek(week: number) {
    this.selectedWeek = week;
    this.child.getDaysByWeek(this.selectedWeek);
  }
}
