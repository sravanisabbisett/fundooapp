import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/Services/userservice/userservice.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  resetForm!: FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router,private userservice:UserserviceService) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.resetForm.controls[controlName].hasError(errorName);
  }

  reset(resetForm:any) {
    let reqData = {
      Email: resetForm.email,

    }
    console.log(reqData);
    /*this.userservice.forgotPassword(reqData).subscribe((res)=>{
      console.log("Reset password was sucessfull");
    })*/
    this.router.navigate(['reset'])
  }

}
