export class Producto {
    public id   ;                          
    public nombre;
    public cantidad;
    public categoriaId;
    public precio;
    
  
    set(data:any){
        this.id = data.id;
        this.nombre = data.nombre;
        this.cantidad = data.cantidad;
        this.categoriaId = data.categoriaId;
        this.precio = data.precio;
    }
}
