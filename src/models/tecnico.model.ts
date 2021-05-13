import {Entity, model, property} from '@loopback/repository';

@model()
export class Tecnico extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  tecnicoid?: number;

  @property({
    type: 'string',
    required: true,
  })
  tecniconombre: string;

  @property({
    type: 'string',
    required: true,
  })
  tecnicoapellido: string;

  @property({
    type: 'number',
    required: true,
  })
  id: number;


  constructor(data?: Partial<Tecnico>) {
    super(data);
  }
}

export interface TecnicoRelations {
  // describe navigational properties here
}

export type TecnicoWithRelations = Tecnico & TecnicoRelations;
