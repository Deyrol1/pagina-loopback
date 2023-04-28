import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Factura } from '../models';
import { FacturaRepository } from '../repositories';
export declare class FacturamongoController {
    facturaRepository: FacturaRepository;
    constructor(facturaRepository: FacturaRepository);
    create(factura: Omit<Factura, 'id'>): Promise<Factura>;
    count(where?: Where<Factura>): Promise<Count>;
    find(filter?: Filter<Factura>): Promise<Factura[]>;
    updateAll(factura: Factura, where?: Where<Factura>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Factura>): Promise<Factura>;
    updateById(id: string, factura: Factura): Promise<void>;
    replaceById(id: string, factura: Factura): Promise<void>;
    deleteById(id: string): Promise<void>;
}
