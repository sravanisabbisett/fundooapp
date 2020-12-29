import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/Services/userservice/userservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  hide = true;
  constructor(private formBuilder: FormBuilder,private router:Router,private userService:UserserviceService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.pattern("^[A-Z]{1}[a-z]{2,}"),Validators.required,Validators.minLength(3)]],
      lastname: ['', [Validators.pattern("^[A-Z]{1}[a-z]{2,}"),Validators.required,Validators.minLength(3)]],
      email:['',[Validators.pattern("^[a-zA-Z0-9+_-]+(?:\\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9]+(?:\\.[a-zA-Z]{2,}){1,2}$"),Validators.required]],
      password:['',[Validators.pattern("^(?=.*[0-9])" + "(?=.*[a-z])(?=.*[A-Z])" + "(?=.*[@#$%^&+=])" + "(?=\\S+$).{8,}$"),Validators.required,Validators.minLength(8)]],
      cpassword:['',Validators.required]

   },{ validator: this.checkPasswords });
  
  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.cpassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }


  /*register($event:any){
    let reqdata = {
      firstname: this.registerForm.value.firstname,
      lastname: this.registerForm.value.lastname,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      
    }

    console.log(" req data ", reqdata);
    console.log(" calling register", $event);
    

  }*/
 
  public hasError=(controlName:string,errorName:string)=>{
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  register = (registerForm: { firstname: any; lastname: any; email: any; password: any; }) => {
    try {
      let newUser = {
        firstName: registerForm.firstname,
        lastName: registerForm.lastname,
        email: registerForm.email,
        password: registerForm.password,
        service: 'advance'      }

      this.userService.registerUser(newUser).subscribe(response => {
        console.log(" register successfull", response);

      })
    
    } catch (error) {
      console.log(error);

    }
  } 
  login()
  {
    this.router.navigate(['login']);
  }

}
