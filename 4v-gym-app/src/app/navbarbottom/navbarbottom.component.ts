import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-navbarbottom',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbarbottom.component.html',
  styleUrl: './navbarbottom.component.css'
})
export class NavbarbottomComponent {

  //Recibimos variable del padre
  @Input() showing_carousel?: Boolean;
  //Enviamos del hijo (este componente) al padre
  @Output() carouselChanged = new EventEmitter<Boolean>();

  goSchedule(){
    this.showing_carousel = false;
    this.carouselChanged.emit(this.showing_carousel);
  }

  goInstructors(){
    this.showing_carousel = true;
    this.carouselChanged.emit(this.showing_carousel);
  }




}
