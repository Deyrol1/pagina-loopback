import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CatalogoDataSource} from '../datasources';
import {Item, ItemRelations} from '../models';

export class ItemRepository extends DefaultCrudRepository<
  Item,
  typeof Item.prototype.id,
  ItemRelations
> {
  constructor(
    @inject('datasources.catalogo') dataSource: CatalogoDataSource,
  ) {
    super(Item, dataSource);
  }
}
