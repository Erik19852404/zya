import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
keyframes,
  //..
} from '@angular/animations';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ 
          opacity: 0,
          transform: 'translateX(-50%)' }),
        animate('300ms ease-in')
      ]),
      transition(':leave', [
        animate(300, style({ transform: 'translateX(50%)' }))
      ])
    ]),
    trigger('flyInOut2', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ 
          opacity: 0,
          transform: 'translateX(5%)' }),
        animate('200ms ease-in-out')
      ]),
      transition(':leave', [
        animate(200, style({ transform: 'translateX(-5%)' }))
      ])
    ])
  ]
})
export class InformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}