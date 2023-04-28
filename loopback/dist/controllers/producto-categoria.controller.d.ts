import { Producto, Categoria } from '../models';
import { ProductoRepository } from '../repositories';
export declare class ProductoCategoriaController {
    productoRepository: ProductoRepository;
    constructor(productoRepository: ProductoRepository);
    getCategoria(id: typeof Producto.prototype.id): Promise<Categoria>;
}
