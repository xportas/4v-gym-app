import { Injectable } from '@angular/core';



export class Instructor {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public phoneNumber: number
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}



@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  maxId: number = 9;

  constructor() { }

  generateInstructors(): Instructor[] {
    const instructors: Instructor[] = [
      new Instructor(1, 'Xabier Portas', 'xportas@example.com', 123456789),
      new Instructor(2, 'Miguel Goyena', 'miguel@example.com', 987654321),
      new Instructor(3, 'Laura Fernández', 'laura@example.com', 555555555),
      new Instructor(4,'Aitor Etxeberría', 'aitor@example.com', 111111111),
      new Instructor(5,'Javier Domínguez', 'javi@example.com', 999999999),
      new Instructor(6,'Sarah Colleman', 'sarah@example.com', 888888888),
      new Instructor(7,'Miriam Álvarez', 'miriam@example.com', 777777777),
      new Instructor(8,'Lúa Castro', 'luacastro@example.com', 666666666),
      new Instructor(9,'Michael Jordan', 'michael@example.com', 444444444),
    ];
    return instructors;
  }

  instructors: Instructor[] = this.generateInstructors();


  addInstructor(inst:Instructor) {
    this.instructors.push(inst);
    this.maxId++;
  }

  removeInstructor(inst:Instructor){
    
  }

  editInstructor(instructorToEdit:Instructor, newName:string, newEmail:string, newPhone:number){
    instructorToEdit.name = newName;
    instructorToEdit.email = newEmail;
    instructorToEdit.phoneNumber = newPhone;
  }
}
