import { Component } from '@angular/core';
import { ModalinstructorComponent } from '../modalinstructor/modalinstructor.component';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ModalinstructorComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

}
