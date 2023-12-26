import { Injectable } from '@angular/core';
import { Instructor } from './instructor.service';
import { InstructorService } from './instructor.service';

export enum EnumNames { 'BodyPump', 'Pilates', 'Spinning' };

export class Activity {
  
  public image: string;
  
  constructor(
    public name: EnumNames,
    public activity_date: Date,
    public instructor: Instructor[],
  ) {
    this.name = name;
    if (name == EnumNames.BodyPump){
      this.image = '../../assets/bodypump.svg'
    }
    else if (name == EnumNames.Pilates){
      this.image = '../../assets/pilates.svg'
    }
    else {
      this.image = '../../assets/spinning.svg'
    }
    this.activity_date = activity_date;
    this.instructor = instructor;
  }
}



@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor() { }

  generateActivities(): Activity[] {
    const activities: Activity[] = [
      //new Activity(EnumNames.BodyPump)
    ];
    return this.activities;
  }

  activities: Activity[] = this.generateActivities();



}
