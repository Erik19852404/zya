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
  selector: 'app-detailes',
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition(':enter', [
        style({ 
          opacity: 0,
          transform: 'translateY(100%)' }),
        animate('400ms ease-out')
      ]),
      transition(':leave', [
        animate(400, style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class DetailesComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }
}