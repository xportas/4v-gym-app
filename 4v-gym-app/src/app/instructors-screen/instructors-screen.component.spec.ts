import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsScreenComponent } from './instructors-screen.component';

describe('InstructorsScreenComponent', () => {
  let component: InstructorsScreenComponent;
  let fixture: ComponentFixture<InstructorsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorsScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
