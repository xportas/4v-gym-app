import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Instructor, InstructorService } from '../services/instructor.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-modaleditinstructor',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './modaleditinstructor.component.html',
  styleUrl: './modaleditinstructor.component.css'
})
export class ModaleditinstructorComponent {

  @Input() instructorSended?: Instructor;

  @Output() resetInstructor = new EventEmitter<boolean>();


  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]);

  constructor(public instructorService: InstructorService) { }


  editInstructor(name: any, email: any, phone: any){
    const editedInstructor = new Instructor(this.instructorSended?.id || this.instructorService.maxId++, name, email, phone);
    let index = this.instructorService.instructors.indexOf(this.instructorSended || editedInstructor);
    console.log(index);
    
    if (index !== -1){
      this.instructorService.instructors[index] = editedInstructor;
    }
    
    this.name.reset();
    this.email.reset();
    this.phone.reset();

    // Reset the value of instructorSended
    this.resetInstructor.emit(true);
  }


}
