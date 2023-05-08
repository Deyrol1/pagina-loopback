import { BasedatosService } from '../../servicios/basedatos.service';

import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { Factura } from 'src/app/modelos/factura';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {


  subtotal:any;
  iva:any =0;
  descuento:any =0;
  total:any;
  inputRowValues = [{}];


  private routeSub: Subscription;


  public facturasub = new Subscription();  

  fecha = new Date();
  fechaf= this.fecha.toLocaleDateString();


  public factura:Factura;



  
 
 

  constructor(public navCtrl: NavController, private base: BasedatosService, private route: ActivatedRoute) {



    
   }



   generar(){


    this.factura = new Factura();

    let dato={                        
      fecha: this.fecha,
      articulos:this.inputRowValues ,
      subtotal:this.subtotal,
      iva:this.iva,
      descuento:this.descuento,
      total:this.total
    }

  
    this.factura.set(dato);

    console.log("factura ez:",this.factura);

    this.base.actfac(this.factura,this.id);
   }


   correo:any;
   nro:any;

   id:any;
   fac:any;


   email:any;

   ngOnInit() {


    this.routeSub = this.route.params.subscribe((params: Params): void => {
      this.id = params['id'];
      this.nro = params['i'];
  });


  this.base.facturaselect(this.id);

  this.facturasub = this.base.facturaselect$().subscribe((res: Factura)=>{

    console.log("la factura completicada da:",res);
    
    this.inputRowValues= res.articulos;

    console.log("fac da:",this.inputRowValues);

  });


 




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
