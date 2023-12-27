import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { DailyboardComponent } from '../dailyboard/dailyboard.component';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule, DailyboardComponent],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css'
})
export class DatepickerComponent {
  monthsOfTheYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
  selectedDay: Date | null = new Date(Date.now());
  dateToShow: string = this.selectedDay?`${this.selectedDay.getDate()}  ${this.monthsOfTheYear[this.selectedDay.getMonth()]}  ${this.selectedDay.getFullYear()}`:'';

  previousDay() {
    if (this.selectedDay) {
      this.selectedDay = new Date(this.selectedDay);
      this.selectedDay.setDate(this.selectedDay.getDate() - 1);
      
      // Build the date to show to user
      this.dateToShow = `${this.selectedDay.getDate()}  ${this.monthsOfTheYear[this.selectedDay.getMonth()]}  ${this.selectedDay.getFullYear()}`;
      // --> special quotes to isert the variable value
      //month go from 0 to 11, if i want to get december = 12, i should +1
    }
  }

  nextDay() {
    if (this.selectedDay) {
      this.selectedDay = new Date(this.selectedDay);
      this.selectedDay.setDate(this.selectedDay.getDate() + 1);
      this.dateToShow = `${this.selectedDay.getDate()}  ${this.monthsOfTheYear[this.selectedDay.getMonth()]}  ${this.selectedDay.getFullYear()}`;
    }
  }


}