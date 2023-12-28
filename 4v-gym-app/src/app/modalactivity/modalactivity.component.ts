import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ActivityService, Activity, EnumNames } from '../services/activity.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modalactivity',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf], //hay que importar el reactive forms module
  templateUrl: './modalactivity.component.html',
  styleUrl: './modalactivity.component.css'
})
export class ModalactivityComponent {

  constructor() { }

  // allActivities: Activity[] = this.activityService.activities;
  // actTypes: EnumNames = this.enumNames;

  actType = new FormControl('', [Validators.required]);
  instOne = new FormControl('', [Validators.required]);
  instTwo = new FormControl('');

  // TODO: coger fecha del datepicker

  /* createActivity() {
    const newActivity = new Activity();
    this.activityService.addActivity(newActivity);

    // Restablecer los valores de los controles después de agregar la actividad
    this.actType.reset();
    this.instOne.reset();
    this.instTwo.reset();
  } */

}
