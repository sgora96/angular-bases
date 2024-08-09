import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public title: string = '02-bases';
  public counter: number = 10;

  aumentar(): void {
    this.counter += 1;
  }
  restar(): void {
    this.counter -= 1;
  }
  reset(): void {
    this.counter = 10;
  }
}
