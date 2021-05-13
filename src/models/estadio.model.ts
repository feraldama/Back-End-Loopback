import {Entity, model, property} from '@loopback/repository';

@model()
export class Estadio extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  estadioid?: number;

  @property({
    type: 'string',
    required: true,
  })
  estadionombre: string;

  @property({
    type: 'number',
    required: true,
  })
  ciudadid: number;


  constructor(data?: Partial<Estadio>) {
    super(data);
  }
}

export interface EstadioRelations {
  // describe navigational properties here
}

export type EstadioWithRelations = Estadio & EstadioRelations;
