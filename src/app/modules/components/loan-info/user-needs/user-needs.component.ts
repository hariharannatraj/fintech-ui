import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-user-needs',
  templateUrl: './user-needs.component.html',
  styleUrls: ['./user-needs.component.scss']
})

export class UserNeedsComponent implements OnInit {
  @Output() nextStage = new EventEmitter<string>();
  displayModal!: boolean;
  amt_need: number = 10000;
  tenure: number = 12;
  interest_rate: number = 5;
  monthly_emi!: number;
  showNextBtn = false;
  constructor(private primengConfig: PrimeNGConfig) { }
  
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  calculate_emi() {
    this.monthly_emi = this.amt_need * this.interest_rate * (1 + this.interest_rate)^this.tenure /  ((1 + this.interest_rate)^this.tenure - 1);
  }

  showModalDialog() {
    this.displayModal = true;
  }

  loan_options = [
    { text: 'Holiday Loan', isClicked: false },
    { text: 'Vacation Loan', isClicked: false },
    { text: 'Home Repairs', isClicked: false },
    { text: 'Lifestyle product purchases', isClicked: false },
    { text: 'Big Purchase', isClicked: false },
    { text: 'Wedding', isClicked: false },
    { text: 'Business expansion', isClicked: false },
    { text: 'Cash against existing owned property', isClicked: false },
    { text: 'New Home purchase', isClicked: false },
    { text: 'Auto / Motor purchase', isClicked: false },
    { text: 'New Home purchase', isClicked: false },
    { text: 'Special Occasion need', isClicked: false },
    { text: 'Education Loan', isClicked: false },
    { text: 'Dept Consolidation', isClicked: false },
  ]


  selectLoan(loan: any): void {
    for(let loan of this.loan_options) {
      loan.isClicked = false;
    }
    loan.isClicked = true;
    this.showNextBtn = true;

  }

  goNextStage(userauth:string) {
    this.nextStage.emit(userauth);
  }

}
