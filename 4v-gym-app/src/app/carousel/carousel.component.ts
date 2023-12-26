import { Component } from '@angular/core';
import { ModalinstructorComponent } from '../modalinstructor/modalinstructor.component';
import { InstructorService } from '../services/instructor.service';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ModalinstructorComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

}
