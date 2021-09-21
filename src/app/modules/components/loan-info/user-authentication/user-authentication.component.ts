import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';

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
  aadhar_verification: boolean = true;
  pan_verification: boolean = false;
  cust_detail_verification: boolean = false;
  aadhar_form!: FormGroup;
  aadhar_submitted: boolean = false;
  pan_form!: FormGroup;
  pan_submitted: boolean = false;
  user_details_form!: FormGroup;
  user_details_submitted: boolean = false;

  constructor(private primengConfig: PrimeNGConfig, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    
    this.aadhar_form = this.formBuilder.group(
      {
        aadhar_number: [
          '',
          [
            Validators.required,
            Validators.minLength(12),
            Validators.maxLength(12)
            // Validators.pattern("^[0-9]*$")
          ]
        ]
      }
    )

    this.pan_form = this.formBuilder.group(
      {
        pan_number: [
          '',
          [
            Validators.required,
            Validators.pattern("[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}")
          ]
        ]
      }
    )

    this.user_details_form = this.formBuilder.group(
      {
        organization: ['', Validators.required],
        income: ['', Validators.required],
        funding_amt: ['', Validators.required],
        tenure: ['', Validators.required],
        mothers_maiden_name:['', Validators.required],
        salary_slips:['', Validators.required],
        accept_terms: [false, Validators.requiredTrue]
      }
    )

  }

  // getter function for aadhar form
  get aadhar(): { [key: string]: AbstractControl } {
    return this.aadhar_form.controls;
  }

  // getter function for pan form
  get pan(): { [key: string]: AbstractControl } {
    return this.pan_form.controls;
  }

  // getter function for user detail form
  get user_detail(): { [key: string]: AbstractControl } {
    return this.user_details_form.controls;
  }

  SubmitAadhar(): void {
    this.aadhar_submitted = true;

    if (this.aadhar_form.invalid) {
      return;
    } else {
      console.log(JSON.stringify(this.aadhar_form.value, null, 2));
      this.AadharAuthenticateModal = true;
    }
  }

  SubmitPan(): void {
    this.pan_submitted = true;

    if(this.pan_form.invalid) {
      return
    } else {
      this.pan_verification = false;
      this.cust_detail_verification = true;
      console.log(JSON.stringify(this.pan_form.value, null, 2))
    }
  }

  SubmitUserDetail(): void {
    this.user_details_submitted = true;
    debugger;
    if(this.user_details_form.invalid) {
      return
    } else {
      console.log(JSON.stringify(this.user_details_form.value, null, 2))
    }
  }

  

  // showAuthenticateModalDialog() {
  //   this.AadharAuthenticateModal = true;
  // }

  showAadharSuccessModal() {
    this.AadharAuthenticateModal = false;
    this.AadharSuccessModal = true;
  }
  

}
