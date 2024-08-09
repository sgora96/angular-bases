import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public tittle: string = 'Iron Man';
  public name: string = 'Sergio';
  public age: number = 28;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Batman';
  }

  changeAge(): void {
    this.age = 36;
  }
  reset(): void {
    this.name = 'iroman';
    this.age = 28;
  }
}
