import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/Services/userservice/userservice.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  hide=true;
  resetForm!: FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router,private userservice:UserserviceService) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required,Validators.pattern("^(?=.*[0-9])" + "(?=.*[a-z])(?=.*[A-Z])" + "(?=.*[@#$%^&+=])" + "(?=\\S+$).{8,}$"),Validators.minLength(8) ]]
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.resetForm.controls[controlName].hasError(errorName);
  }

  reset(resetForm:any) {
    let reqData = {
      password: resetForm.password,

    }
    console.log(reqData);
    this.userservice.forgotPassword(reqData).subscribe((res)=>{
      console.log("Reset password was sucessfull");
    })
    this.router.navigate(['login']);
  }



}
