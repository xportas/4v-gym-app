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
}
