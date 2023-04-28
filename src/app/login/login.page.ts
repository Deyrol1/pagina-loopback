import { LoginService } from './../servicios/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  usuario={
    email:'',
    contrasena:''
  }


  correo:any;
 
  ingresar(){
  


      this.router.navigate(['/tabs']);
    
  
  }
  constructor(private authservice: LoginService,private router: Router) { }

  ngOnInit() {
  }

}
