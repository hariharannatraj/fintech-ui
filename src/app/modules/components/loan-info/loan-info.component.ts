import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-info',
  templateUrl: './loan-info.component.html',
  styleUrls: ['./loan-info.component.scss']
})
export class LoanInfoComponent implements OnInit {
  currStage: string = 'userneeds';

  constructor() { }

  ngOnInit(): void {
  }

  Showcontent(stageName: string) {
    this.currStage = stageName;
  }

}
