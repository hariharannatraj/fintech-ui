import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  @Input() currStage!: string;
  stepperArray = [
    {step_name: 'Specify Your Needs', state_class: ''},
    {step_name: 'User Authentication', state_class: ''},
    {step_name: 'Loan Offers', state_class: ''},
    {step_name: 'Loan Approval', state_class: ''},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
