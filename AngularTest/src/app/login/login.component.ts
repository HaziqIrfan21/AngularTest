import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string='';
  password:string='';
  message:string="";


  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  public login():void{
    this.loginService.login(this.name, this.password).subscribe({
      next: (res:any) => {
        if(res.value.status) {

          this.router.navigate(['home'])
          this.message = res.value.message;
        }
        else {
          this.message = res.value.message;
        }
      },
      error: (error:any) => {
        this.message = "Unknown Error occured, please try again"  
        this.message = error;
      }
    
    });
  }
  

}
