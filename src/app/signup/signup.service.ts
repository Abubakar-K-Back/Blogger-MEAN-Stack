import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SignupService {


  constructor(private http:HttpClient) { }

  getdata
  adduser(name,email,password){

    const obj={

      name,
      email,
      password,


    };
    console.log(obj);
    this.http
      .post(`${this.uri}/Users`,obj)
      .subscribe((data:any)=>{

        console.log(data)
        this.getdata=data


      })


  }
  msgs()
  {
    return this.getdata
  }

  
  uri='http://localhost:4000/api'

  signup(obj)
  {
    return this.http.post(`${this.uri}/Users`,obj)
  }







}
