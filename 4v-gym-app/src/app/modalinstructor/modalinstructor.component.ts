import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { InstructorService } from '../services/instructor.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modalinstructor',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf], //hay que importar el reactive forms module
  templateUrl: './modalinstructor.component.html',
  styleUrl: './modalinstructor.component.css'
})
export class ModalinstructorComponent {

  constructor(instructorService: InstructorService){ }

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]);


}
