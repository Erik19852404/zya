import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { teamMembers } from '../team-members';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  
  teamMembers = teamMembers;

  constructor(
  ){}

  ngOnInit() {
  }

}