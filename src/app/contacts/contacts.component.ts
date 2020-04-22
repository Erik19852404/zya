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
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
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
export class ContactsComponent implements OnInit {

  constructor(
  ) {}

  ngOnInit() {
  }
}