import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { CatalogoDataSource } from '../datasources';
import { Categoria, CategoriaRelations, Producto } from '../models';
import { ProductoRepository } from './producto.repository';
export declare class CategoriaRepository extends DefaultCrudRepository<Categoria, typeof Categoria.prototype.id, CategoriaRelations> {
    protected productoRepositoryGetter: Getter<ProductoRepository>;
    readonly productos: HasManyRepositoryFactory<Producto, typeof Categoria.prototype.id>;
    constructor(dataSource: CatalogoDataSource, productoRepositoryGetter: Getter<ProductoRepository>);
}
