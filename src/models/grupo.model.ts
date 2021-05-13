import {Entity, model, property} from '@loopback/repository';

@model()
export class Grupo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  grupoid?: number;

  @property({
    type: 'string',
    required: true,
  })
  gruponombre: string;


  constructor(data?: Partial<Grupo>) {
    super(data);
  }
}

export interface GrupoRelations {
  // describe navigational properties here
}

export type GrupoWithRelations = Grupo & GrupoRelations;
