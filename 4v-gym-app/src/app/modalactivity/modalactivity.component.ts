import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ActivityService, Activity } from '../services/activity.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modalactivity',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf], //hay que importar el reactive forms module
  templateUrl: './modalactivity.component.html',
  styleUrl: './modalactivity.component.css'
})
export class ModalactivityComponent {

  constructor(public activityService: ActivityService) { }

  actType = new FormControl('', [Validators.required]);
  instOne = new FormControl('', [Validators.required]);
  instTwo = new FormControl('');

  date = 

  createActivity() {
    const newActivity = new Activity();
    this.activityService.addActivity(newActivity);

    // Restablecer los valores de los controles después de agregar la actividad
    this.actType.reset();
    this.instOne.reset();
    this.instTwo.reset();
  }

}
