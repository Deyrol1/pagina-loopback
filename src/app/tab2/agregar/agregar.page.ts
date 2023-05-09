
import { BasedatosService } from './../../servicios/basedatos.service';

import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

import { NavController } from '@ionic/angular';
import { async, asyncScheduler } from 'rxjs';
import { Factura } from 'src/app/modelos/factura';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {


  subtotal:any;
  iva:any =0;
  descuento:any =0;
  total:any;
  inputRowValues = [{}];

  email:any;



  token:any;



  fecha = new Date();
  fechaf= this.fecha.toLocaleDateString();


  public factura:Factura;



  
 
 

  constructor(public navCtrl: NavController, private base: BasedatosService) {

    

    


  


   

  

  



    
   }



   generar(){


    console.log("el token  en regiztro aca da:",this.token)
    this.factura = new Factura();

    let dato={                          
      fecha: this.fecha,
      articulos:this.inputRowValues ,
      subtotal:this.subtotal,
      iva:this.iva,
      descuento:this.descuento,
      total:this.total,
      userId: this.token,

    }

  
    this.factura.set(dato);

    console.log("factura ez:",this.factura);

    this.base.regfac(this.factura);
   }


 
   ngOnInit() {

    
    this.addtoken();


    




   }

   
    async addtoken(){

   
      const { value } = await Preferences.get({ key: 'token' });
      if(value)
      this.base.token(value).then((res:any)=>{
        console.log("El rez en token da:",res)
        this.token =res;
      })
    
 

      this.addemail();

    
  
   }

   async addemail(){
    const { value } = await Preferences.get({ key: 'email' });

    this.email = value;
 

   }


 
  

 












  addRow() {
    this.inputRowValues.push({})
   console.log("loz datoz de loz productoz uga zon:",this.inputRowValues.length)

   let num =0;
   let total:any;

   let subtotal =0;

   while(num<this.inputRowValues.length){

    total = this.inputRowValues[num];

    console.log("el total da:",total)
    if(total.total>=0){
      subtotal = subtotal +total.total;
      this.subtotal = subtotal;
      console.log("el zubtotal da:",subtotal)
    }
    num++
   }
  }

  _event:any;
  // removes entry from the  inputRowValues array based on the id
  onDelete(_event) {
    console.log("el evento da:",_event)
    this.inputRowValues = this.inputRowValues.filter((i: any) => i.id !== _event.id)
  }

  

  miau(){
    this.total = (this.subtotal*this.iva/100)+this.subtotal-this.descuento;
  }

  
}
