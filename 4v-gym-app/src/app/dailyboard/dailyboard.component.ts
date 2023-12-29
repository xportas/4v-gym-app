import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
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

  // Getting alert from modal that we created a new activity
  @Input() activitiesBoardChange?: boolean;



  // Activities in this day
  act11h: any;
  act14h: any;
  act18h: any;


  // Array to send data to modal
  dataToModal: any[] = [];

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
          if (aux[i].activity_date.getHours() == 11) {
            this.act11h = aux[i];
          }
          else if (aux[i].activity_date.getHours() == 14) {
            this.act14h = aux[i];
          }
          else if (aux[i].activity_date.getHours() == 18) {
            this.act18h = aux[i];
          }
          else {
            console.log('There was an error with the assignament in the correct variable from activities list')
          }
        }
      }
    }
  } // ngOnChanges function close


  sendDataToModal(hour: number) {
    this.dataToModal = [this.selectedDay, hour];
  }

  refreshBoard() {
    this.activitiesBoardChange = false;

    this.act11h = undefined;
    this.act14h = undefined;
    this.act18h = undefined;

    // Get value of selectedDay
    let newSelectedDay = this.selectedDay;

    // Get all the activities and add to currentactivities
    let aux = this.activitiesService.activities;
    for (let i = 0; i < aux.length; i++) {
      if (aux[i].activity_date.getFullYear() === newSelectedDay.getFullYear() &&
        aux[i].activity_date.getMonth() === newSelectedDay.getMonth() &&
        aux[i].activity_date.getDate() === newSelectedDay.getDate()) {
        if (aux[i].activity_date.getHours() == 11) {
          this.act11h = aux[i];
        }
        else if (aux[i].activity_date.getHours() == 14) {
          this.act14h = aux[i];
        }
        else if (aux[i].activity_date.getHours() == 18) {
          this.act18h = aux[i];
        }
        else {
          console.log('There was an error with the assignament in the correct variable from activities list')
        }
      }
    }
  }


  /* DELETE AND EDIT FUNCTIONS */
  deleteActivity(activity: Activity) {
    let position = this.activitiesService.activities.indexOf(activity);
    this.activitiesService.activities.splice(position, 1);
    this.refreshBoard();
  }

  activitySended?: Activity = undefined;
  editActivity(activity: Activity) {
    this.activitySended = activity;
  }

  // Método del componente hijo que envía el nuevo valor al componente padre
  onBooleanEditChanged(value: boolean) {
    this.activitySended = undefined;
    if (value) {
      this.refreshBoard();
    }
  }
  /* END OF DELETE AND EDIT FUNCTIONS */

} // class close
