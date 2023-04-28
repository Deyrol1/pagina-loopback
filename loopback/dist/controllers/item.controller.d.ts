import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Item } from '../models';
import { ItemRepository } from '../repositories';
export declare class ItemController {
    itemRepository: ItemRepository;
    constructor(itemRepository: ItemRepository);
    create(item: Item): Promise<Item>;
    count(where?: Where<Item>): Promise<Count>;
    find(filter?: Filter<Item>): Promise<Item[]>;
    updateAll(item: Item, where?: Where<Item>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Item>): Promise<Item>;
    updateById(id: number, item: Item): Promise<void>;
    replaceById(id: number, item: Item): Promise<void>;
    deleteById(id: number): Promise<void>;
}
