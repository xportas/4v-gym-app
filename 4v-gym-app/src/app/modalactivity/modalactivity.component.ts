import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // IMPORT THIS BECAUSE IF YOU DONT IMPORT IT NGFOR CANT WORK
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ActivitiesService, Activity } from '../services/activities.service';
import { InstructorService, Instructor } from '../services/instructor.service';
import { NgIf, NgFor } from '@angular/common';


@Component({
  selector: 'app-modalactivity',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, CommonModule], // Import CommonModule for correct ngFor work
  templateUrl: './modalactivity.component.html',
  styleUrl: './modalactivity.component.css'
})
export class ModalactivityComponent {

  constructor(public activitiesService: ActivitiesService, public instructorService: InstructorService) { }

  allActivities: Activity[] = this.activitiesService.activities;
  allInstructors: Instructor[] = this.instructorService.instructors;

  // variable to show (or not) the select of assistant instructor
  instrAssistant: boolean = false;

  actType = new FormControl('', [Validators.required]);
  instOne = new FormControl('', [Validators.required]);
  instTwo = new FormControl('');

  onActTypeChange() {
    // if actType === BodyPump user can choose anotherone assistant instructor
    this.instrAssistant = this.actType.value === 'BodyPump';
  }

  resetFormValues(){
    // Function to reset all the values into form
    this.actType.setValue('');
    this.instOne.setValue('');
    this.instTwo.setValue('');
  }

}
