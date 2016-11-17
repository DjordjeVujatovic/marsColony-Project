import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators,ValidatorFn, AbstractControl } from '@angular/forms';
import { NewColonist, Job } from '../models';
import  JobsService from '../services/jobs.service';
import { cantBe } from '../shared/validators';



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


  ngOnInit() {
  this.registerForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    age: new FormControl('', [Validators.required]),
    job_id: new FormControl('(none)', [cantBe(this.NO_JOB_SELECTED)])
  });
}

onSubmit(event) {
  event.preventDefault();
  if (this.registerForm.invalid) {
    //The Form is invalid
  } else {
    const name = this.registerForm.get('name').value;
    const age = this.registerForm.get('age').value;
    const job_id = this.registerForm.get('job_id').value;

    console.log('Ok lets register this new colonist:', new NewColonist(name, age, job_id));
  }
 }
}
