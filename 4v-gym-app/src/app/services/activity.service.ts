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

  instructorService: any;


  constructor() { }


  generateActivities(): Activity[] {
    const activities: Activity[] = [
      new Activity(EnumNames.BodyPump, new Date('7 Jan 2024 11:00:00 +0000'), [this.instructorService.instructors[0], this.instructorService.instructors[1]]),
      new Activity(EnumNames.Pilates, new Date('7 Jan 2024 18:00:00 +0000'), [this.instructorService.instructors[2], this.instructorService.instructors[3]]),
      new Activity(EnumNames.BodyPump, new Date('8 Jan 2024 14:00:00 +0000'), [this.instructorService.instructors[5], this.instructorService.instructors[4]]),
      new Activity(EnumNames.Spinning, new Date('9 Jan 2024 11:00:00 +0000'), [this.instructorService.instructors[0], this.instructorService.instructors[1]]),
      new Activity(EnumNames.Spinning, new Date('9 Jan 2024 14:00:00 +0000'), [this.instructorService.instructors[1], this.instructorService.instructors[2]]),
    ];
    return this.activities;
  }


  activities: Activity[] = this.generateActivities();



}
