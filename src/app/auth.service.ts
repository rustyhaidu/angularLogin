import { BasicAuthResponseModel } from './models/BasicAuthResponseModel';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _authString :string ='';

  constructor(private http:HttpClient) { 
    this._authString =this.authFromLocalStorage;
  
  }

  login(username:string ,password: string) : Observable<BasicAuthResponseModel>{
this._authString = 'Basic ' + window.btoa(username + ':' + password);
// let headers = new HttpHeaders({
//   'authorization':this.authString

// }); 
return this.http.get<BasicAuthResponseModel>('http://localhost:8080/api/login').pipe(
  map(response =>response)
);

  }

  get authString(){
    return this._authString;
  }
  saveAuthInLocalStorage(){
    console.log("Saved:" + this._authString)
    localStorage.setItem('auth',this.authString);
  }
  get authFromLocalStorage(){
    let auth =localStorage.getItem('auth')|| '';
    console.log('get auth: ' +auth);
    return auth;
  }
}
