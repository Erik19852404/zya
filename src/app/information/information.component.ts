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
      transition('void => *', [
        style({ 
          opacity: 0,
          transform: 'translateX(-50%)' }),
        animate('300ms ease-in')
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateX(50%)' }))
      ])
    ])
  ]
})
export class InformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}