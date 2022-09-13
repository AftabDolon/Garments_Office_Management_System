import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetattendanceComponent } from './getattendance.component';

describe('GetattendanceComponent', () => {
  let component: GetattendanceComponent;
  let fixture: ComponentFixture<GetattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetattendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
