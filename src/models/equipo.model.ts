import {Entity, model, property} from '@loopback/repository';

@model()
export class Equipo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  equipoid?: number;

  @property({
    type: 'string',
    required: true,
  })
  equiponombre: string;


  constructor(data?: Partial<Equipo>) {
    super(data);
  }
}

export interface EquipoRelations {
  // describe navigational properties here
}

export type EquipoWithRelations = Equipo & EquipoRelations;
