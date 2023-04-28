export class Factura {
    public id   ;                          
    public fecha;
    public articulos: string [] =[];
    public  subtotal;
    public iva?;
    public  descuento?;
    public  total;
    set(data:any){
        this.id = data.id;
        this.fecha = data.fecha;
        this.articulos =data.articulos;
        this.subtotal= data.subtotal;
        this.iva= data.iva;
        this.descuento= data.descuento;
        this.total = data.total;
    }


}
