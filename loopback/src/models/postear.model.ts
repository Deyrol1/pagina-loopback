import {Entity, model, property} from '@loopback/repository';

@model()
export class Postear extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  detalle: string;


  constructor(data?: Partial<Postear>) {
    super(data);
  }
}

export interface PostearRelations {
  // describe navigational properties here
}

export type PostearWithRelations = Postear & PostearRelations;
