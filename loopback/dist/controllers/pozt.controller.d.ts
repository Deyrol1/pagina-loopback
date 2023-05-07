import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Postear } from '../models';
import { PostearRepository } from '../repositories';
export declare class PoztController {
    postearRepository: PostearRepository;
    constructor(postearRepository: PostearRepository);
    create(postear: Omit<Postear, 'id'>): Promise<Postear>;
    count(where?: Where<Postear>): Promise<Count>;
    find(filter?: Filter<Postear>): Promise<Postear[]>;
    updateAll(postear: Postear, where?: Where<Postear>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Postear>): Promise<Postear>;
    updateById(id: string, postear: Postear): Promise<void>;
    replaceById(id: string, postear: Postear): Promise<void>;
    deleteById(id: string): Promise<void>;
}
