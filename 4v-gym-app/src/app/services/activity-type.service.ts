import { Injectable } from '@angular/core';

export enum EnumNames { 'BodyPump', 'Pilates', 'Spinning' };

export class ActivityType{

  public image: string;

  constructor(
    public name: EnumNames,
    public instructors: number,
  ) {
    this.name = name;
    this.instructors = instructors;
    if (name == EnumNames.BodyPump){
      this.image = '../../assets/bodypump.svg'
    }
    else if (name == EnumNames.Pilates){
      this.image = '../../assets/pilates.svg'
    }
    else {
      this.image = '../../assets/spinning.svg'
    }
  }
}


@Injectable({
  providedIn: 'root'
})
export class ActivityTypeService {

  activityTypesArray:ActivityType[] = [new ActivityType(EnumNames.BodyPump, 2), new ActivityType(EnumNames.Spinning, 1), new ActivityType(EnumNames.Pilates, 1)];

  constructor() { }

  public getActityTypesArray(){
    return this.activityTypesArray;
  }

}
