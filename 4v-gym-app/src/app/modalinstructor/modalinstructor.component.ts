import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Instructor, InstructorService } from '../services/instructor.service';
import { NgIf } from '@angular/common';





@Component({
  selector: 'app-modalinstructor',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf], //hay que importar el reactive forms module
  templateUrl: './modalinstructor.component.html',
  styleUrl: './modalinstructor.component.css'
})
export class ModalinstructorComponent {

  constructor(public instructorService: InstructorService) { }

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]);

  createInstructor(name:any, email:any, phone:any) {
    const newInstructor = new Instructor(name, email, phone);
    this.instructorService.addInstructor(newInstructor);

    // Restablecer los valores de los controles después de agregar el instructor
    this.name.reset();
    this.email.reset();
    this.phone.reset();
  }
}
