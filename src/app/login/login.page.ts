import { async } from 'rxjs';
import { BasedatosService } from 'src/app/servicios/basedatos.service';
import { LoginService } from './../servicios/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import * as assert from 'assert';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  


  mal:any;
  email:any;
  contrasena:any;
 

  constructor(private router: Router, private base: BasedatosService) { }

  ngOnInit() {
  }

  ingresar(){


    let nuevo={
      email:this.email,
      password:this.contrasena
    }
   
    console.log(nuevo)

    this.base.login(nuevo).then(async(res:any)=>{

   
      if(!res.error){
        await Preferences.set({
          key: 'email',
          value: res.userProfile.email,
        });
  
        await Preferences.set({
          key: 'id',
          value: res.userProfile.id,
        });
  
  
  
          await Preferences.set({
            key: 'token',
            value: res.token,
          });
  
          this.router.navigate(['/tabs']);
        
      

      }

      else{
        this.mal= true;


      }

       
      
   
     
  
    
     })

 

  

}

registro(){

  let nuevo={
    email:this.email,
    password:this.contrasena
  }
  this.base.registrouser(nuevo);
  
}

}
