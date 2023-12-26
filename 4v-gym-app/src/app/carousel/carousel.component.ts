import { Component } from '@angular/core';
import { ModalinstructorComponent } from '../modalinstructor/modalinstructor.component';
import { Instructor, InstructorService } from '../services/instructor.service';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ModalinstructorComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  currentIndex: number = 0;

  constructor(public instructorService: InstructorService) { }

  nextInstructors() {
    // Avanzar al siguiente instructor
    this.currentIndex = (this.currentIndex + 1) % this.instructorService.instructors.length;
  }

  previousInstructors() {
    // Retroceder al instructor anterior
    this.currentIndex = (this.currentIndex - 1 + this.instructorService.instructors.length) % this.instructorService.instructors.length;
  }

}
