import { Component, EventEmitter } from '@angular/core';
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

  //Recibimos variable del padre
  @Input() dataToModal: any;

  constructor(public activitiesService: ActivitiesService, public instructorService: InstructorService) { }

  actType = new FormControl('', [Validators.required]);
  instOne = new FormControl('', [Validators.required]);
  instTwo = new FormControl('');

  allActivities: Activity[] = this.activitiesService.activities;
  allInstructors: Instructor[] = this.instructorService.instructors;

  // variable to show (or not) the select of assistant instructor
  instrAssistant: boolean = false;


  onActTypeChange() {
    // if actType === BodyPump user can choose one more assistant instructor
    this.instrAssistant = this.actType.value === 'BodyPump';
  }

  resetFormValues() {
    // Function to reset all the values into form
    this.actType.setValue('');
    this.instOne.setValue('');
    this.instTwo.setValue('');
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

    // Reset values of form
    this.resetFormValues();

    //TODO: cuando funcione bien tengo que refrescar el daily board y sumar y restar un día con los métodos existentes
  }






}
