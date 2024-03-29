import { Injectable } from '@angular/core';
import { InstructorService, Instructor } from './instructor.service';


export class Activity {
  
  public image: string;
  
  constructor(
    public id: number,
    public name: string,
    public activity_date: Date,
    public instructor1: Instructor,
    public instructor2?: Instructor,
  ) {
    if (name === 'BodyPump' && instructor2 !== undefined) {
      this.image = '../../assets/bodypump.svg';
      this.instructor1 = instructor1;
      this.instructor2 = instructor2;
    } else if (name === 'Pilates' && instructor2 === undefined) {
      this.image = '../../assets/pilates.svg';
      this.instructor1 = instructor1;
    } else {
      this.image = '../../assets/spinning.svg';
      this.instructor1 = instructor1;
    }
    this.id = id;
    this.activity_date = activity_date;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  maxId: number = 5;

  constructor(private instructorService: InstructorService) { }

  generateActivities(): Activity[] {
    return [
      new Activity(1, 'BodyPump', new Date('7 Jan 2024 10:00:00 +0000'), this.instructorService.instructors[0], this.instructorService.instructors[1]),
      new Activity(2, 'Pilates', new Date('7 Jan 2024 17:00:00 +0000'), this.instructorService.instructors[2]),
      new Activity(3, 'BodyPump', new Date('8 Jan 2024 13:00:00 +0000'), this.instructorService.instructors[5], this.instructorService.instructors[4]),
      new Activity(4, 'Spinning', new Date('9 Jan 2024 10:00:00 +0000'), this.instructorService.instructors[3]),
      new Activity(5, 'Spinning', new Date('9 Jan 2024 13:00:00 +0000'), this.instructorService.instructors[1]),
    ];
  }

  activities: Activity[] = this.generateActivities();

  instructors = this.instructorService.instructors;

  addActivity(act: Activity) {
    this.activities.push(act);
    this.maxId++;
  }


}
