import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BtnMgmtService } from '../btn-mgmt.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  //..
} from '@angular/animations';

import { teamMembers } from '../team-members';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css'],
  animations: [
    trigger('btnTrigger', [
      state('activated', style({
        color:  'blue',
        opacity: 0.5,
      })),
      state('deactivated', style({
        opacity: 1,
      })),
      transition('activated => deactivated', [
        animate('0.5s 100ms ease-in-out')
      ]),    
      transition('deactivated => activated', [
        animate('0.4s'),
      ]),    
    ]),
  ]
})
export class OurTeamComponent implements OnInit {
  
  teamMembers = teamMembers;

  constructor(
    private btnMgmt: BtnMgmtService,
  ){}

  ngOnInit() {
  }
  
  activateBtn(btnName){
    this.btnMgmt.activateBtn(btnName);
  }

  getActiveBtn(){
    return this.btnMgmt.getActiveBtn();
  }
}