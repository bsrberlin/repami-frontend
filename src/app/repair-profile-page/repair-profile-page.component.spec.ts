import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairProfilePageComponent } from './repair-profile-page.component';

describe('RepairProfilePageComponent', () => {
  let component: RepairProfilePageComponent;
  let fixture: ComponentFixture<RepairProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepairProfilePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepairProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
