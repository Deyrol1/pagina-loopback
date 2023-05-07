import { Count, Filter, Where } from '@loopback/repository';
import { User, Factura } from '../models';
import { UserRepository } from '../repositories';
export declare class UserFacturaController {
    protected userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    find(id: string, filter?: Filter<Factura>): Promise<Factura[]>;
    create(id: typeof User.prototype.id, factura: Omit<Factura, 'id'>): Promise<Factura>;
    patch(id: string, factura: Partial<Factura>, where?: Where<Factura>): Promise<Count>;
    delete(id: string, where?: Where<Factura>): Promise<Count>;
}
