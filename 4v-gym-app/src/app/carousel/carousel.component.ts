import { Component } from '@angular/core';
import { ModalinstructorComponent } from '../modalinstructor/modalinstructor.component';
import { Instructor, InstructorService } from '../services/instructor.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ModalinstructorComponent, NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  constructor(public instructorService: InstructorService) { }

  instructors = this.instructorService.generateInstructors();

  currentIndex = 0;
  instructorsInScreen: Instructor[] = this.getInstructorsInScreen();

  nextInstructors() {
    this.currentIndex = (this.currentIndex + 1) % this.instructors.length;
    this.instructorsInScreen = this.getInstructorsInScreen();
  }

  previousInstructors() {
    this.currentIndex = (this.currentIndex - 1 + this.instructors.length) % this.instructors.length;
    this.instructorsInScreen = this.getInstructorsInScreen();
  }

  private getInstructorsInScreen(): Instructor[] {
    const nextIndex = (this.currentIndex + 1) % this.instructors.length;
    const previousIndex = (this.currentIndex - 1 + this.instructors.length) % this.instructors.length;

    return [
      this.instructors[previousIndex],
      this.instructors[this.currentIndex],
      this.instructors[nextIndex],
    ];
  }
}
