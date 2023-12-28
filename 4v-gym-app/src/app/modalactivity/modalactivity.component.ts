import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ActivitiesService, Activity } from '../services/activities.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-modalactivity',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './modalactivity.component.html',
  styleUrl: './modalactivity.component.css'
})
export class ModalactivityComponent {

  constructor(public activitiesService: ActivitiesService) { }

  allActivities: Activity[] = this.activitiesService.activities;

  actType = new FormControl('', [Validators.required]);
  instOne = new FormControl('', [Validators.required]);
  instTwo = new FormControl('');



}
