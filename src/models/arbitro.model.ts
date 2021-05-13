import {Entity, model, property} from '@loopback/repository';

@model()
export class Arbitro extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  arbitroid?: number;

  @property({
    type: 'string',
    required: true,
  })
  arbitronombre: string;

  @property({
    type: 'string',
    required: true,
  })
  arbitroapellido: string;


  constructor(data?: Partial<Arbitro>) {
    super(data);
  }
}

export interface ArbitroRelations {
  // describe navigational properties here
}

export type ArbitroWithRelations = Arbitro & ArbitroRelations;
