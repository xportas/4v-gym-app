import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyboardComponent } from './dailyboard.component';

describe('DailyboardComponent', () => {
  let component: DailyboardComponent;
  let fixture: ComponentFixture<DailyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
