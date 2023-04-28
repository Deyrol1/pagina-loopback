import { Component } from '@angular/core';

import { BasedatosService } from '../servicios/basedatos.service';
import { Factura } from '../modelos/factura';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {






  public facturas : Factura[] =[];
  public factura : Factura ;

  public facturassub = new Subscription();  

  constructor( private base: BasedatosService) {



    
    
    
    
    
    
   }

   ngOnInit() {
  

    this.base.todasfacturas()  ;
    this.facturassub = this.base.todasfacturas$().subscribe((res: Factura[])=>{

      this.facturas = res;

      console.log("uga",this.facturas);

    });


   }


}

