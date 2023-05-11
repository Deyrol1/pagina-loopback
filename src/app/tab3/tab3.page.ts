import { Router, RouterModule } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router) {}


  email:any;
  async addemail(){
    const { value } = await Preferences.get({ key: 'email' });

    this.email = value;
 

   }

  
  ngOnInit(){

    this.addemail();

 
  }

  oprimir(){
    Preferences.clear();
    this.router.navigate(['']);

  }


}
