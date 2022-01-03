import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const APILoginURL = 'http://localhost:83/api/login/loginDB';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public login (name: string, pass: string) : Observable<any> { 
    
    return this.httpClient.post(APILoginURL, { userName: name, password: pass}, {withCredentials:true})
  }
  
}
