import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {
  baseUrl=environment.baseUrl
  constructor(private http:HttpClient) {
   }

 token: any;

  post(url: string, data: any){
    this.token=localStorage.getItem('token');
    console.log("token is",this.token);
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token,
        
      })
    }
    return this.http.post(this.baseUrl + url,data,options);
  }



  get(url: any){
    this.token=localStorage.getItem('token');
    let options={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token
      })
    }
  return this.http.get(this.baseUrl+url,options);
  }
}
