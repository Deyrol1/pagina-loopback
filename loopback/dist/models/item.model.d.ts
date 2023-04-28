import { Entity } from '@loopback/repository';
export declare class Item extends Entity {
    id?: number;
    detalle?: string;
    [prop: string]: any;
    constructor(data?: Partial<Item>);
}
export interface ItemRelations {
}
export type ItemWithRelations = Item & ItemRelations;
