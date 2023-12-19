import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarbottomComponent } from './navbarbottom.component';

describe('NavbarbottomComponent', () => {
  let component: NavbarbottomComponent;
  let fixture: ComponentFixture<NavbarbottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarbottomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
