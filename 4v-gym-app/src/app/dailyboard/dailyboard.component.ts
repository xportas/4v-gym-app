import { Component, SimpleChanges } from '@angular/core';
import { ModalactivityComponent } from '../modalactivity/modalactivity.component';
import { Input } from '@angular/core';
import { InstructorService, Instructor } from '../services/instructor.service';
import { ActivityService, Activity } from '../services/activity.service';

@Component({
  selector: 'app-dailyboard',
  standalone: true,
  imports: [ModalactivityComponent],
  templateUrl: './dailyboard.component.html',
  styleUrl: './dailyboard.component.css'
})
export class DailyboardComponent {

  // Initializes services
  constructor(public activityService: ActivityService, public instructorService: InstructorService) { }

  // Getting its father´s data
  @Input() selectedDay: any;

  // Activities in this day
  currentActivities: Activity[] = [];


  // Function that is listening changes into selectedDate and add activities to currentActivities
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedDay']) {
      let newSelectedDay = changes['selectedDay'].currentValue;
      let aux = this.activityService.activities;
      for (let i = 0; i < aux.length; i++){
        if (aux[i].activity_date.getFullYear() == newSelectedDay.getFullYear() &&
          aux[i].activity_date.getMonth() == newSelectedDay.getMonth() && 
          aux[i].activity_date.getDay() == newSelectedDay.getDay()){
            this.currentActivities.push(aux[i]);
        }
        if (this.currentActivities.length >= 3){
          return;
        }
      }
    }
  }

}
