import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongofacturaDataSource} from '../datasources';
import {Postear, PostearRelations} from '../models';

export class PostearRepository extends DefaultCrudRepository<
  Postear,
  typeof Postear.prototype.id,
  PostearRelations
> {
  constructor(
    @inject('datasources.mongofactura') dataSource: MongofacturaDataSource,
  ) {
    super(Postear, dataSource);
  }
}
