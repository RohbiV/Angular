import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewDesignationComponent } from './crew-designation.component';

describe('CrewDesignationComponent', () => {
  let component: CrewDesignationComponent;
  let fixture: ComponentFixture<CrewDesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewDesignationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
