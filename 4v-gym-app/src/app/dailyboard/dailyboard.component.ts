import { Component } from '@angular/core';
import { ActivityboardComponent } from '../activityboard/activityboard.component';
import { ModalactivityComponent } from '../modalactivity/modalactivity.component';

@Component({
  selector: 'app-dailyboard',
  standalone: true,
  imports: [ActivityboardComponent, ModalactivityComponent],
  templateUrl: './dailyboard.component.html',
  styleUrl: './dailyboard.component.css'
})
export class DailyboardComponent {

}
