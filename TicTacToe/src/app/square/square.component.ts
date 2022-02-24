import { Component, Input } from '@angular/core';

@Component({
  selector: 'square',
  template: `
    <button> {{ value }} </button>
  `,
  styles: [
  ]
})
export class SquareComponent {  // UI dumb component
  @Input() value: 'X' | 'O';
}
