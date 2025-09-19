import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairProfileEditPageComponent } from './repair-profile-edit-page.component';

describe('RepairProfileEditPageComponent', () => {
  let component: RepairProfileEditPageComponent;
  let fixture: ComponentFixture<RepairProfileEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepairProfileEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepairProfileEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
