import { UserCredentials } from '@loopback/authentication-jwt';
import { Entity } from '@loopback/repository';
import { Factura } from './factura.model';
export declare class User extends Entity {
    id: string;
    realm?: string;
    username?: string;
    facturas: Factura[];
    email: string;
    emailVerified?: boolean;
    verificationToken?: string;
    userCredentials: UserCredentials;
    [prop: string]: any;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export type UserWithRelations = User & UserRelations;
