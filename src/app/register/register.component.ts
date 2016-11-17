import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators,ValidatorFn, AbstractControl } from '@angular/forms';
import { NewColonist, Job } from '../models';
import  JobsService from '../services/jobs.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[JobsService]
})
export class RegisterComponent implements OnInit {

colonist: NewColonist;
marsJobs: Job[];
registerForm: FormGroup;

NO_JOB_SELECTED = '(none)';


  constructor(jobService: JobsService) {


    jobService.getJobs().subscribe((jobs) => {
    this.marsJobs = jobs;
    });
  }

cantBe(value:string): ValidatorFn {
  return(control: AbstractControl): {[key: string]: any} => {
    return control.value === value ? {'cant be value': {value}} :null;
  };
}

  ngOnInit() {
  this.registerForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    age: new FormControl('', [Validators.required]),
    job_id: new FormControl('(none)', [this.cantBe(this.NO_JOB_SELECTED)])
  });
  }
}
