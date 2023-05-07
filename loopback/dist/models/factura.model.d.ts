import { Entity } from '@loopback/repository';
import { Producto } from './producto.model';
export declare class Factura extends Entity {
    id?: string;
    fecha: string;
    articulos: Producto[];
    subtotal: number;
    iva?: number;
    descuento?: number;
    total: number;
    userId?: string;
    [prop: string]: any;
    constructor(data?: Partial<Factura>);
}
export interface FacturaRelations {
}
export type FacturaWithRelations = Factura & FacturaRelations;
