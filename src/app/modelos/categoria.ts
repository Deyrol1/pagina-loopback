export class Categoria {
    public id   ;                          
    public nombre;
  
    set(data:any){
        this.id = data.id;
        this.nombre = data.nombre;
    }
}
