import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Producto } from '../models';
import { ProductoRepository } from '../repositories';
export declare class ProductoController {
    productoRepository: ProductoRepository;
    constructor(productoRepository: ProductoRepository);
    create(producto: Producto): Promise<Producto>;
    count(where?: Where<Producto>): Promise<Count>;
    find(filter?: Filter<Producto>): Promise<Producto[]>;
    updateAll(producto: Producto, where?: Where<Producto>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Producto>): Promise<Producto>;
    updateById(id: number, producto: Producto): Promise<void>;
    replaceById(id: number, producto: Producto): Promise<void>;
    deleteById(id: number): Promise<void>;
}
