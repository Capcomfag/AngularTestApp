import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class HelloComponent  {
  @Input() name: string;
}
