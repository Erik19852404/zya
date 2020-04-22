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
    trigger('divTrigger', [
      transition('* <=> *', [
        animate('1s ease-in-out', keyframes([
          style({ opacity: 0 }),
          style({ opacity: 1 }),
        ]))
      ]),      
    ]),
  ]
})
export class InformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}