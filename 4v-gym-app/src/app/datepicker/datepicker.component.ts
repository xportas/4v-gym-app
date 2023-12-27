import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import { DailyboardComponent } from '../dailyboard/dailyboard.component';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule, DailyboardComponent],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css'
})
export class DatepickerComponent {
  selectedDay: Date | null = new Date(Date.now());

  previousDay(){
    if (this.selectedDay) {
      this.selectedDay = new Date(this.selectedDay);
      this.selectedDay.setDate(this.selectedDay.getDate() - 1);
    }
  }

  nextDay(){
    if (this.selectedDay) {
      this.selectedDay = new Date(this.selectedDay);
      this.selectedDay.setDate(this.selectedDay.getDate() + 1);
    }
  }


}