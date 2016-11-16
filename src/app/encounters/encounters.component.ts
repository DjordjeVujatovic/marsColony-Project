import { Component, OnInit } from '@angular/core';
import EncountersService from '../services/encounters.service';
import {Encounter} from '../models';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.css'],
  providers: [EncountersService]
})

export class EncountersComponent implements OnInit {

  marsEncounters: Encounter[];

  constructor(encounterService: EncountersService) { 

    encounterService.getEncounters().subscribe((encounters)=>{
      this.marsEncounters = encounters;
    });
  }
  ngOnInit() {
  }

}


