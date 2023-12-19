import { Injectable } from '@angular/core';
import { Instructor } from './instructor.service';
import { ActivityType } from './activity-type.service';




  export class Activity {
    constructor(
      public activity_date: Date,
      public instructor: Instructor[],
      public type: ActivityType
    ) {
      this.activity_date = activity_date;
      this.instructor = instructor;
      this.type = type;
    }
  }



@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor() { }
}
