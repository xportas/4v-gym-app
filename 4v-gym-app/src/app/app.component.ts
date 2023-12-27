import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbartopComponent } from './navbartop/navbartop.component';
import { NavbarbottomComponent } from './navbarbottom/navbarbottom.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbartopComponent, NavbarbottomComponent, CarouselComponent, ReactiveFormsModule, DatepickerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '4v-gym-app';

  showing_carousel: Boolean = false;

  // Método del componente hijo que envía el nuevo valor al componente padre
  onCarouselChanged(value: Boolean) {
    this.showing_carousel = value;
  }

}
