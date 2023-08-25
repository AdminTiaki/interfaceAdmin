import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AdminTiaki';

  checkCondition(value: number): boolean {
    return value > 10;
  }
  
}
