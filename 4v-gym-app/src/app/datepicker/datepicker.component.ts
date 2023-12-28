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

  dateToShow: string = this.selectedDay ? `${this.selectedDay.getDate()}  ${this.monthsOfTheYear[this.selectedDay.getMonth()]}  ${this.selectedDay.getFullYear()}` : '';

  /* DATE BOX */

  private updateDateToShow() {
    // Build the date to show to user
    this.dateToShow = this.selectedDay
      ? `${this.selectedDay.getDate()} ${this.monthsOfTheYear[this.selectedDay.getMonth()]} ${this.selectedDay.getFullYear()}`
      : '';
    // --> special quotes to isert the variable value
    //month go from 0 to 11, if i want to get december = 12, i should +1
  }

  onDateSelected(selectedDate: Date) {
    // Actualiza selectedDay y dateToShow cuando se selecciona una nueva fecha
    this.selectedDay = selectedDate;
    this.updateDateToShow();
  }

  previousDay() {
    if (this.selectedDay) {
      this.selectedDay = new Date(this.selectedDay);
      this.selectedDay.setDate(this.selectedDay.getDate() - 1);
      this.updateDateToShow();
    }
  }

  nextDay() {
    if (this.selectedDay) {
      this.selectedDay = new Date(this.selectedDay);
      this.selectedDay.setDate(this.selectedDay.getDate() + 1);
      this.updateDateToShow();
    }
  }
  /* END DATE BOX */

}