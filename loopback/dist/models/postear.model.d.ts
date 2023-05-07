import { Entity } from '@loopback/repository';
export declare class Postear extends Entity {
    id?: string;
    detalle: string;
    constructor(data?: Partial<Postear>);
}
export interface PostearRelations {
}
export type PostearWithRelations = Postear & PostearRelations;
