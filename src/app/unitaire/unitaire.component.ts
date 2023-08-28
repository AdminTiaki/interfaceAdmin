import { Component } from '@angular/core';

@Component({
  selector: 'app-unitaire',
  templateUrl: './unitaire.component.html',
  styleUrls: ['./unitaire.component.scss']
})
export class UnitaireComponent {

  checkConditionUnitaireComponent(value: number): boolean {
    return value > 10;
  }

}
