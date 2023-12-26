import { Component } from '@angular/core';
import { ActivityboardComponent } from '../activityboard/activityboard.component';

@Component({
  selector: 'app-dailyboard',
  standalone: true,
  imports: [ActivityboardComponent],
  templateUrl: './dailyboard.component.html',
  styleUrl: './dailyboard.component.css'
})
export class DailyboardComponent {

}
