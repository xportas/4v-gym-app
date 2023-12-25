import { Component } from '@angular/core';
import { ModalactivityComponent } from '../modalactivity/modalactivity.component';


@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [ModalactivityComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {

}
