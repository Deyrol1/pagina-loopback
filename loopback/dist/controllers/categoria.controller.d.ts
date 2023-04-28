import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Categoria } from '../models';
import { CategoriaRepository } from '../repositories';
export declare class CategoriaController {
    categoriaRepository: CategoriaRepository;
    constructor(categoriaRepository: CategoriaRepository);
    create(categoria: Categoria): Promise<Categoria>;
    count(where?: Where<Categoria>): Promise<Count>;
    find(filter?: Filter<Categoria>): Promise<Categoria[]>;
    updateAll(categoria: Categoria, where?: Where<Categoria>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Categoria>): Promise<Categoria>;
    updateById(id: number, categoria: Categoria): Promise<void>;
    replaceById(id: number, categoria: Categoria): Promise<void>;
    deleteById(id: number): Promise<void>;
}
