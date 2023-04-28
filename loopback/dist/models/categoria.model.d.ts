import { Entity } from '@loopback/repository';
import { Producto } from './producto.model';
export declare class Categoria extends Entity {
    id?: number;
    nombre: string;
    productos: Producto[];
    [prop: string]: any;
    constructor(data?: Partial<Categoria>);
}
export interface CategoriaRelations {
}
export type CategoriaWithRelations = Categoria & CategoriaRelations;
