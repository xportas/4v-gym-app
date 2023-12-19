import { Injectable } from '@angular/core';
import { Instructor } from './instructor.service';




export enum ActivityType {'BodyPump', 'Pilates', 'Spinning'};

export class Activity {
  constructor(
    public activity_date: Date,
    public instructor: Instructor,
    public instructor2: Instructor, 
    public type: ActivityType
  ) {
    this.activity_date = activity_date;
    this.instructor = instructor;
    this.instructor2 = instructor2;
    this.type = type;
  }
}



@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor() { }
}
