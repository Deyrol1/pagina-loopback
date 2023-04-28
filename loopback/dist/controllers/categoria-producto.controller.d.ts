import { Count, Filter, Where } from '@loopback/repository';
import { Categoria, Producto } from '../models';
import { CategoriaRepository } from '../repositories';
export declare class CategoriaProductoController {
    protected categoriaRepository: CategoriaRepository;
    constructor(categoriaRepository: CategoriaRepository);
    find(id: number, filter?: Filter<Producto>): Promise<Producto[]>;
    create(id: typeof Categoria.prototype.id, producto: Omit<Producto, 'id'>): Promise<Producto>;
    patch(id: number, producto: Partial<Producto>, where?: Where<Producto>): Promise<Count>;
    delete(id: number, where?: Where<Producto>): Promise<Count>;
}
