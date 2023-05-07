import { DefaultCrudRepository } from '@loopback/repository';
import { MongofacturaDataSource } from '../datasources';
import { Postear, PostearRelations } from '../models';
export declare class PostearRepository extends DefaultCrudRepository<Postear, typeof Postear.prototype.id, PostearRelations> {
    constructor(dataSource: MongofacturaDataSource);
}
