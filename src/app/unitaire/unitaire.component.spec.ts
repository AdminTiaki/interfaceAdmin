import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitaireComponent } from './unitaire.component';

describe('UnitaireComponent', () => {
  let component: UnitaireComponent;
  let fixture: ComponentFixture<UnitaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitaireComponent]
    });
    fixture = TestBed.createComponent(UnitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if value is greater than 10', () => {
    const result = component.checkConditionUnitaireComponent(15);
    expect(result).toBe(false);
  });

});
