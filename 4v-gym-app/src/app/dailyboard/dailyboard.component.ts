import { Component, SimpleChanges } from '@angular/core';
import { ModalactivityComponent } from '../modalactivity/modalactivity.component';
import { Input } from '@angular/core';
import { InstructorService, Instructor } from '../services/instructor.service';
import { ActivitiesService, Activity } from '../services/activities.service';
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dailyboard',
  standalone: true,
  imports: [ModalactivityComponent, NgIf, NgClass],
  templateUrl: './dailyboard.component.html',
  styleUrl: './dailyboard.component.css'
})
export class DailyboardComponent {

  // Initializes services
  constructor(public activitiesService: ActivitiesService, public instructorService: InstructorService) { }

  // Getting its father´s data
  @Input() selectedDay: any;

  // Activities in this day
  act11h: any;
  act14h: any;
  act18h: any;


  /* 
  *
  Function that is listening changes into selectedDate and add activities to currentActivities
  *
  */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedDay']) {
      // Reset currentActivities
      this.act11h = undefined;
      this.act14h = undefined;
      this.act18h = undefined;

      // Get new value of selectedDay
      let newSelectedDay = changes['selectedDay'].currentValue;

      // Get all the activities and add to currentactivities
      let aux = this.activitiesService.activities;
      for (let i = 0; i < aux.length; i++) {
        if (aux[i].activity_date.getFullYear() === newSelectedDay.getFullYear() &&
        aux[i].activity_date.getMonth() === newSelectedDay.getMonth() &&
        aux[i].activity_date.getDate() === newSelectedDay.getDate()) {

          if (aux[i].activity_date.getUTCHours() === 11) {
            this.act11h = aux[i];
          }
          else if (aux[i].activity_date.getUTCHours() === 14) {
            this.act14h = aux[i];
          }
          else {
            this.act18h = aux[i];
          }
        }
      }
      console.log(this.act11h);
      console.log(this.act14h);
      console.log(this.act18h);
    }
  } // ngOnChanges function close

} // class close
