import { Component, Input } from '@angular/core';

@Component({
  selector: 'square',
  template: `
    <button nbButton hero status="primary" *ngIf="!value"> {{ value }} </button>
    <button nbButton hero status="success" *ngIf="value =='X'"> {{ value }} </button>
    <button nbButton hero status="info" *ngIf="value == 'O'"> {{ value }} </button> 
`,
  styles: [
    `button {
      width: 100%;
      height: 100%;
      font-size: 5em
    }`
  ]
})
export class SquareComponent {  // UI dumb component
  @Input() value: 'X' | 'O';
}
