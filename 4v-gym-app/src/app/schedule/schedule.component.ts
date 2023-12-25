import { Component } from '@angular/core';
import { ModalactivityComponent } from '../modalactivity/modalactivity.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';


@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [ModalactivityComponent, DatepickerComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {

}
