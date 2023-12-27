import { Component } from '@angular/core';
import { ModalinstructorComponent } from '../modalinstructor/modalinstructor.component';
import { Instructor, InstructorService } from '../services/instructor.service';
import { NgFor } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ModalinstructorComponent, NgFor, ReactiveFormsModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  constructor(public instructorService: InstructorService) { }

  instructors = this.instructorService.instructors;

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


  deleteInstructor(instructor: Instructor){
    let position = this.instructors.indexOf(instructor);
    this.instructors.splice(position, 1);
    this.nextInstructors();
    this.previousInstructors();
  }

  editInstructor(instructor: Instructor){
    
  }




  /*
  MANEJAMOS EL BUSCADOR DEL CAROUSEL
  */
  searchText = new FormControl('');

  ngOnInit() {
    // Escuchar cambios en el FormControl
    this.searchText.valueChanges.subscribe(() => {
      this.filterInstructors();
    });
  }

  filterInstructors() {
    const searchTerm = this.searchText.value?.toLowerCase() || '';
    if (searchTerm == ''){
      this.instructorsInScreen = this.getInstructorsInScreen();
      return;
    }
    this.instructorsInScreen = this.instructors.filter(instructor =>
      instructor.name.toLowerCase().includes(searchTerm)
    ).slice(0, 3);
  }


}
