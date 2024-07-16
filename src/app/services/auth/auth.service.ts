import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:4000/api/auth';

  http=inject(HttpClient)

  constructor() { }


  getAllUsers(){
    return this.http.get(`${this.url}/users`)
  }

  signIn(signinObj:{email:string,password:string}):Observable<any>{
    return this.http.post<any>(`${this.url}/dummylogin`,signinObj)
  }

  signUp(signupObj:{username:string,email:string,password:string}):Observable<any>{
    return this.http.post<any>(`${this.url}/register`,signupObj)
  }


}
