import { DefaultCrudRepository } from '@loopback/repository';
import { CatalogoDataSource } from '../datasources';
import { Item, ItemRelations } from '../models';
export declare class ItemRepository extends DefaultCrudRepository<Item, typeof Item.prototype.id, ItemRelations> {
    constructor(dataSource: CatalogoDataSource);
}
