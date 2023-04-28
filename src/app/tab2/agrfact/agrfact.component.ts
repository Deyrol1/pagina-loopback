import { Categoria } from './../../modelos/categoria';

import { Producto } from './../../modelos/producto';
import { Subscription } from 'rxjs';
import { Component, OnInit,  Input, EventEmitter, Output  } from '@angular/core';
import { Factura } from 'src/app/modelos/factura';
import { BasedatosService } from 'src/app/servicios/basedatos.service';

@Component({
  selector: 'app-agrfact',
  templateUrl: './agrfact.component.html',
  styleUrls: ['./agrfact.component.scss'],
})
export class AgrfactComponent  implements OnInit {

  
  public categorias:Categoria[] =[];
  public categoriassub = new Subscription(); 
  public producto : Producto ;
  public productos=[];
  public todoproductos:Producto[] =[];
  public productossub = new Subscription(); 

 
  item:any;
  // the data object to hold values from this component
  @Input() data: any

  // emitt an event to indicate the user has clicked on 
  // the delete button in this component
  @Output() onDelete = new EventEmitter<any>();
  @Output() change = new EventEmitter<any>();
  
  
  fecha = new Date();
  fechaf= this.fecha.toLocaleDateString();


  logs: string;
  valor=1;

  cantcat =0;
  constructor(private base: BasedatosService) { 

 
   

  }


  

  dato =0;

  ngOnInit() {
    this.data.id = new Date().getTime()
    this.base.todascategorias() ;
    this.categoriassub = this.base.todascategorias$().subscribe((res: Categoria[])=>{
      this.categorias = res;
     
    });
  
    this.base.todosproductos();
    this.productossub = this.base.todosproductos$().subscribe((res: Producto[])=>{
  
      this.todoproductos = res;
      this.productos = this.todoproductos.filter((array:any) => array.categoriaId == this.data.categoria);
    });
  }



  deleteClicked() {
  this.onDelete.next(this.data)
  }



  miau(){
    this.data.total =this.data.cantidad * this.data.precio;
  }

  um : any
 
  handleChange(e) {




    this.productos = this.todoproductos.filter((array:any) => array.categoriaId == e.categoria);
    
    console.log("el producto zeleccionado da:",this.productos);

  

  };


  cambio(e) {
    this.logs = (e.detail.value);
    let otro=this.todoproductos.find(dat=> dat.id == this.logs); 

  
      this.data.precio =otro.precio;
   

  };





}
