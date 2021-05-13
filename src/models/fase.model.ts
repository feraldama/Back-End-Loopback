import {Entity, model, property} from '@loopback/repository';

@model()
export class Fase extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  faseid?: number;

  @property({
    type: 'string',
    required: true,
  })
  fasenombre: string;


  constructor(data?: Partial<Fase>) {
    super(data);
  }
}

export interface FaseRelations {
  // describe navigational properties here
}

export type FaseWithRelations = Fase & FaseRelations;
