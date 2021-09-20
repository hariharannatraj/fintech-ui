import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.scss']
})
export class UserAuthenticationComponent implements OnInit {
  AadharAuthenticateModal!: boolean;
  AadharSuccessModal!: boolean;
  selectedValue: string = 'val1';
  checked: boolean = false;
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  showAuthenticateModalDialog() {
    this.AadharAuthenticateModal = true;
  }

  showAadharSuccessModal() {
    this.AadharAuthenticateModal = false;
    this.AadharSuccessModal = true;
  }
  

}
