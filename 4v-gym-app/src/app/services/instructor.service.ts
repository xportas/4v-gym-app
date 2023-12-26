import { Injectable } from '@angular/core';



export class Instructor {
  constructor(
    public name: string,
    public email: string,
    public phoneNumber: number
  ) {
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}



@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor() { }

  generateInstructors(): Instructor[] {
    const instructors: Instructor[] = [
      new Instructor('Xabier Portas', 'xportas@example.com', 123456789),
      new Instructor('Miguel Goyena', 'miguel@example.com', 987654321),
      new Instructor('Laura Fernández', 'laura@example.com', 555555555),
      new Instructor('Aitor Etxeberría', 'aitor@example.com', 111111111),
      new Instructor('Javier Domínguez', 'javi@example.com', 999999999),
      new Instructor('Sarah Colleman', 'sarah@example.com', 888888888),
      new Instructor('Miriam Álvarez', 'miriam@example.com', 777777777),
      new Instructor('Lúa Castro', 'luacastro@example.com', 666666666),
      new Instructor('Michael Jordan', 'michael@example.com', 444444444),
    ];
    return instructors;
  }

  instructors: Instructor[] = this.generateInstructors();

  addInstructor(inst:Instructor) {
    this.instructors.push(inst);
  }

  removeInstructor(inst:Instructor){
    
  }

  editInstructor(instructorToEdit:Instructor, newName:string, newEmail:string, newPhone:number){
    instructorToEdit.name = newName;
    instructorToEdit.email = newEmail;
    instructorToEdit.phoneNumber = newPhone;
  }
}
