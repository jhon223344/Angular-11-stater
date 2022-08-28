import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor() {
    var obj = [
      { id: 1, boy: 5 },
      { id: 2, boy: 6 },
      { id: 3, boy: 7 },
      { id: 4, boy: 8 },
    ];
    const mapped = obj.map(({ id, boy }) => ({ id, boy }));

    console.log(mapped, 'mapped');
  }
}
