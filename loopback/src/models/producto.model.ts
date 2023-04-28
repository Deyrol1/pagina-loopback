import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Categoria} from './categoria.model';

@model({settings: {strict: false}})
export class Producto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
  })
  cantidad?: number;

  @property({
    type: 'string',
    required: true,
  })
  precio: string;

  @belongsTo(() => Categoria)
  categoriaId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
