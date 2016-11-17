import { Component, OnInit } from '@angular/core';
import AliensService from '../services/aliens.service';
import EncountersService from '../services/encounters.service';
import { FormGroup, FormControl, FormBuilder, Validators,ValidatorFn, AbstractControl } from '@angular/forms';

import { Alien, NewEncounter, Encounter } from '../models';
import { cantBe } from '../shared/validators';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [AliensService, EncountersService]
})
export class ReportComponent implements OnInit {

  aliensList: Alien[];
  reportForm: FormGroup;
  NO_ALIEN_SELECTED= '(none)';

  constructor(private aliensService: AliensService,
              private encountersService: EncountersService){

                aliensService.getAliens().subscribe((aliens)=>{
                  this.aliensList = aliens;
                })
              }

  ngOnInit() {
    this.reportForm = new FormGroup({
      atype: new FormControl(this.NO_ALIEN_SELECTED,[cantBe(this.NO_ALIEN_SELECTED)]),
      action: new FormControl('', [Validators.required, Validators.maxLength(450)])
    });
  }
 onSubmit(event) {
    event.preventDefault();
  if (this.reportForm.invalid) {
    //The Form is invalid
    console.log(this.reportForm.invalid);
  } else {
    const date = this.reportForm.get('date').value;
    const atype = this.reportForm.get('atype').value;
    const action = this.reportForm.get('action').value;
    const colonist_id = this.reportForm.get('colonist_id').value;
  

    console.log('Ok lets register this new colonist:', new NewEncounter(date, atype, action, colonist_id));
  }
 }
}