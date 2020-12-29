import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service'

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpservice:HttpServiceService) { }
    registerUser(data: any){
    console.log("Data in userservice",data)
    return this.httpservice.post('user/userSignUp',data);
  }

  loginnUser(data:any){
    console.log("Data in userService",data)
    return this.httpservice.post('user/login',data);
  }

  forgotPassword(data: any){
    console.log("Data in userService",data);
    return this.httpservice.post('/user/reset-password',data);
  }
}
