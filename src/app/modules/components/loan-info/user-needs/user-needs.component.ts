import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-user-needs',
  templateUrl: './user-needs.component.html',
  styleUrls: ['./user-needs.component.scss']
})

export class UserNeedsComponent implements OnInit {
  displayModal!: boolean;
  amt_need: number = 10000;
  tenure!: number;
  interest_rate!: number;
  constructor(private primengConfig: PrimeNGConfig) { }
  
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  

  showModalDialog() {
    this.displayModal = true;
  }

}
