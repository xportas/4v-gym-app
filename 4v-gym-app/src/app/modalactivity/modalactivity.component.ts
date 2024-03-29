import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // IMPORT THIS BECAUSE IF YOU DONT IMPORT IT NGFOR CANT WORK
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ActivitiesService, Activity } from '../services/activities.service';
import { InstructorService, Instructor } from '../services/instructor.service';
import { NgIf } from '@angular/common';
import { Input } from '@angular/core';


@Component({
  selector: 'app-modalactivity',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, CommonModule], // Import CommonModule for correct ngFor work
  templateUrl: './modalactivity.component.html',
  styleUrl: './modalactivity.component.css'
})
export class ModalactivityComponent {

  // Getting variable from father
  @Input() dataToModal: any;

  // Sending alert to dailyboard that we created a new activity
  @Output() activitiesBoardChange = new EventEmitter<boolean>();

  // Necessary variables to execute edit Activity functions
  @Input() activitySended?: Activity;
  @Output() resetActivity = new EventEmitter<boolean>();


  constructor(public activitiesService: ActivitiesService, public instructorService: InstructorService) { }

  actType = new FormControl('', [Validators.required]);
  instOne = new FormControl('', [Validators.required]);
  instTwo = new FormControl('');


  // variable to show (or not) the select of assistant instructor
  instrAssistant: boolean = false;


  onActTypeChange() {
    // if actType === BodyPump user can choose one more assistant instructor
    this.instrAssistant = this.actType.value === 'BodyPump';
  }


  createNewActivity(actType: any, instOne: any, instTwo: any) {
    let actDay = new Date(
      this.dataToModal[0].getFullYear(),
      this.dataToModal[0].getMonth(),
      this.dataToModal[0].getDate(),
      this.dataToModal[1], 0, 0, 0);

    let instructorOne = this.instructorService.instructors.find(inst => inst.id == instOne);
    let instructorTwo = instTwo !== undefined ? this.instructorService.instructors.find(inst => inst.id == instTwo) : undefined;

    let newActivity = new Activity(++this.activitiesService.maxId, actType, actDay, instructorOne || new Instructor(99, 'CLASS', 'email', -1), instructorTwo);
    this.activitiesService.addActivity(newActivity);

    console.log(newActivity);
    // Reset values of form
    this.resetFormValues();

    // Now, we need to refresh dailyboard to show the new activity
    this.activitiesBoardChange.emit(true);
  }

  editActivity(actType: any, instOne: any, instTwo: any) {
    let instructorOne = this.instructorService.instructors.find(inst => inst.id == instOne);
    let instructorTwo = instTwo !== undefined ? this.instructorService.instructors.find(inst => inst.id == instTwo) : undefined;
    
    const editedActivity = new Activity(this.activitySended?.id || ++this.activitiesService.maxId, actType, this.activitySended?.activity_date || new Date(), instructorOne || new Instructor(99, 'CLASS', 'email', -1), instructorTwo);
    
    let index = this.activitiesService.activities.indexOf(this.activitySended || editedActivity);
    console.log(index);

    if (index !== -1) {
      this.activitiesService.activities[index] = editedActivity;
    }

    this.resetFormValues();

    // Reset the value of instructorSended
    this.resetActivity.emit(true);
  }


  resetFormValues() {
    // Function to reset all the values into form
    this.actType.setValue('');
    this.instOne.setValue('');
    this.instTwo.setValue('');
  }

}
