import { Component } from '@angular/core';
import { ModalinstructorComponent } from '../modalinstructor/modalinstructor.component';
import { Instructor, InstructorService } from '../services/instructor.service';
import { NgFor } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ModaleditinstructorComponent } from '../modaleditinstructor/modaleditinstructor.component';



@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ModalinstructorComponent, NgFor, ReactiveFormsModule, ModaleditinstructorComponent],
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



    /* DELETE AND EDIT FUNCTIONS */
  deleteInstructor(instructor: Instructor){
    let position = this.instructors.indexOf(instructor);
    this.instructors.splice(position, 1);
    this.nextInstructors();
    this.previousInstructors();
  }

  instructorSended?: Instructor = undefined;

  editInstructor(instructor: Instructor){
    this.instructorSended = instructor;
  }
  // Método del componente hijo que envía el nuevo valor al componente padre
  onBooleanEditChanged(value: boolean) {
    this.instructorSended = undefined;
    if (value){
      this.nextInstructors();
      this.previousInstructors();
    }
  }
    /* END OF DELETE AND EDIT FUNCTIONS */



  /*
  CAROUSEL FILTER
  */
  searchText = new FormControl('');

  ngOnInit() {
    // Listening changes in FormControl
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
