import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: '#c6ecff'
      })),
      transition('open => closed', [
        animate('5s')
      ]),
      transition('closed => open', [
        animate('0.8s')
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'angular-internationalization';
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
