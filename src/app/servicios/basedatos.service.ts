import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@capacitor/core/types/core-plugins';
import { Observable, Subject } from 'rxjs';
import { Factura } from '../modelos/factura';
import { Producto } from '../modelos/producto';
import { Categoria } from '../modelos/categoria';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {


  public facturas$ = new Subject<Factura[]>();
  public factura$ = new Subject<Factura>();
  public facturas : Factura[] =[];
  public factura : Factura ;


  public categorias$ = new Subject<Categoria[]>();
  public categoria$ = new Subject<Categoria>();
  public categorias : Categoria[] =[];
  public categoria : Categoria ;
  

  public productos$ = new Subject<Producto[]>();
  public producto$ = new Subject<Producto>();
  public productos : Producto[] =[];
  public producto : Producto ;


  constructor(private http:HttpClient ) { }


   url = "http://localhost:3000/";
  
 

   async todasfacturas ()  {

    this.facturas =[];

    const opt ={
      url: this.url+"facturas"
    }

    const response: HttpResponse = await CapacitorHttp.get(opt);


    console.log("el rezponze ez:",response);
   
    response.data.forEach((item:any)=>{
      console.log("el item ez:",item);
      this.factura= new Factura();
      this.factura.set(item);
      this.facturas.push(this.factura);

    });

    console.log("laz facturaz zon:",this.facturas);
    this.facturas$.next(this.facturas);
    console.log("laz facturaz$ zon:",this.facturas$);
    return this.facturas$;
   }




  todasfacturas$(): Observable<Factura[]>{
    return this.facturas$.asObservable();
  }


  async  regfac(dato:any){

    console.log("el dato ez:",JSON.stringify(dato))
    const opt ={
      url: this.url+"facturas",
      data: dato,
      headers: {"content-type":"application/json"}
    };
 
  

    const response: HttpResponse = await CapacitorHttp.post(opt);


  }


  async todascategorias ()  {

    this.categorias =[];

    const opt ={
      url: this.url+"categorias"
    }

    const response: HttpResponse = await CapacitorHttp.get(opt);


   
   
    response.data.forEach((item:any)=>{
  
      this.categoria= new Categoria();
      this.categoria.set(item);
      this.categorias.push(this.categoria);

    });


    this.categorias$.next(this.categorias);
  
    return this.categorias$;
   }




  todascategorias$(): Observable<Categoria[]>{
    return this.categorias$.asObservable();
  }


  async todosproductos ()  {

    this.productos =[];

    const opt ={
      url: this.url+"productos"
    }

    const response: HttpResponse = await CapacitorHttp.get(opt);
   
    console.log("el rezponze ez:",response);
    response.data.forEach((item:any)=>{
      console.log("el item producto ez uga:",item);
      this.producto= new Producto();
        this.producto.set(item);
        this.productos.push(this.producto);
    });

   
    console.log("el producto final da:",this.productos)
    this.productos$.next(this.productos);
   
    return this.productos$;
   }




  todosproductos$(): Observable<Producto[]>{
    return this.productos$.asObservable();
  }



  async productoselect (dato:string)  {

    this.productos =[];

    const opt ={

      url: "http://localhost:3000/productos/"+dato
    }

    const response: HttpResponse = await CapacitorHttp.get(opt);


    console.log("el producto individual  ez: uhhkjdgkgd",response);
   
    this.producto= new Producto();
    this.producto.set(response.data);

   console.log("el podructo uga ez:",this.producto);
    

    this.producto$.next(this.producto);
    console.log("el producto$ ez:",this.producto$);
    return this.producto$;
   }



   productoselect$(): Observable<Producto>{
    return this.producto$.asObservable();
  }


  async facturaselect (dato:string)  {

    this.productos =[];

    const opt ={

      url: "http://localhost:3000/facturas/"+dato
    }

    const response: HttpResponse = await CapacitorHttp.get(opt);


    console.log("el producto individual  ez: uhhkjdgkgd",response);
   
    this.factura= new Factura();
    this.factura.set(response.data);

   console.log("el podructo uga ez:",this.factura);
    

    this.factura$.next(this.factura);
    console.log("el producto$ ez:",this.factura$);
    return this.factura$;
   }



   facturaselect$(): Observable<Factura>{
    return this.factura$.asObservable();
  }



  async  actfac(dato:any,id:any){

    console.log("el dato ez:",JSON.stringify(dato))
    const opt ={
      url: this.url+"facturas/"+id,
      data: dato,
      headers: {"content-type":"application/json"}
    };
 
  

    const response: HttpResponse = await CapacitorHttp.put(opt);


  }
  async  delfac(id:any){

  
    const opt ={
      url: this.url+"facturas/"+id,
      headers: {"content-type":"application/json"}
    };
 
  

    const response: HttpResponse = await CapacitorHttp.delete(opt);


  }

  async registrouser(dato:any){
    const opt ={
      url: "http://localhost:3000/signup",
      headers: {"content-type":"application/json"},
      data:dato
    };
 
  

    const response: HttpResponse = await CapacitorHttp.post(opt);



  }
  async login(dato:any){
    const opt ={
      url: "http://localhost:3000/users/login",
      headers: {"content-type":"application/json"},
      data:dato
    };
 
  

    const response: HttpResponse = await CapacitorHttp.post(opt);



  }



  }

