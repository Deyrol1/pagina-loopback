import { Entity } from '@loopback/repository';
export declare class Producto extends Entity {
    id?: number;
    nombre: string;
    cantidad?: number;
    precio: string;
    categoriaId: number;
    [prop: string]: any;
    constructor(data?: Partial<Producto>);
}
export interface ProductoRelations {
}
export type ProductoWithRelations = Producto & ProductoRelations;
