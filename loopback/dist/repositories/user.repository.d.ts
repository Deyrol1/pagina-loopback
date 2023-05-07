import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory, juggler, HasManyRepositoryFactory } from '@loopback/repository';
import { User, UserRelations, Factura } from '../models';
import { UserCredentials } from '@loopback/authentication-jwt';
import { UserCredentialsRepository } from '@loopback/authentication-jwt';
import { FacturaRepository } from './factura.repository';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id, UserRelations> {
    protected userCredentialsRepositoryGetter: Getter<UserCredentialsRepository>;
    protected facturaRepositoryGetter: Getter<FacturaRepository>;
    readonly userCredentials: HasOneRepositoryFactory<UserCredentials, typeof User.prototype.id>;
    readonly facturas: HasManyRepositoryFactory<Factura, typeof User.prototype.id>;
    constructor(dataSource: juggler.DataSource, userCredentialsRepositoryGetter: Getter<UserCredentialsRepository>, facturaRepositoryGetter: Getter<FacturaRepository>);
    findCredentials(userId: typeof User.prototype.id): Promise<UserCredentials | undefined>;
}
