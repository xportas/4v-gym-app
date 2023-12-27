import { Injectable } from '@angular/core';
import { InstructorService, Instructor } from './instructor.service';

export enum EnumNames { 'BodyPump', 'Pilates', 'Spinning' };

@Injectable({
  providedIn: 'root'
})
export class Activity {
  
  public image: string;
  public instructors: Instructor[];
  
  constructor(
    public id: number,
    public name: EnumNames,
    public activity_date: Date,
    public instructor1: Instructor,
    public instructor2?: Instructor,
  ) {
    if (name === EnumNames.BodyPump && instructor2) {
      this.image = '../../assets/bodypump.svg';
      this.instructors = [instructor1, instructor2];
    } else if (name === EnumNames.Pilates) {
      this.image = '../../assets/pilates.svg';
      this.instructors = [instructor1];
    } else {
      this.image = '../../assets/spinning.svg';
      this.instructors = [instructor1];
    }
    this.id = id;
    this.activity_date = activity_date;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  maxId: number = 5;

  constructor(private instructorService: InstructorService) { }

  generateActivities(): Activity[] {
    return [
      new Activity(1, EnumNames.BodyPump, new Date('7 Jan 2024 11:00:00 +0000'), this.instructorService.instructors[0], this.instructorService.instructors[1]),
      new Activity(2, EnumNames.Pilates, new Date('7 Jan 2024 18:00:00 +0000'), this.instructorService.instructors[2]),
      new Activity(3, EnumNames.BodyPump, new Date('8 Jan 2024 14:00:00 +0000'), this.instructorService.instructors[5], this.instructorService.instructors[4]),
      new Activity(4, EnumNames.Spinning, new Date('9 Jan 2024 11:00:00 +0000'), this.instructorService.instructors[3]),
      new Activity(5, EnumNames.Spinning, new Date('9 Jan 2024 14:00:00 +0000'), this.instructorService.instructors[1]),
    ];
  }

  activities: Activity[] = this.generateActivities();

  instructors = this.instructorService.instructors;

  addActivity(act: Activity) {
    this.activities.push(act);
    this.maxId++;
  }
}
