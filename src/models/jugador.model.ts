import {Entity, model, property} from '@loopback/repository';

@model()
export class Jugador extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  jugadorid?: number;

  @property({
    type: 'string',
    required: true,
  })
  jugadornombre: string;

  @property({
    type: 'string',
    required: true,
  })
  jugadorapellido: string;

  @property({
    type: 'number',
    required: true,
  })
  jugadornumerocamiseta: number;

  @property({
    type: 'string',
    required: true,
  })
  jugadorsobrenombre: string;

  @property({
    type: 'string',
    required: true,
  })
  jugadornombrecamiseta: string;

  @property({
    type: 'date',
    required: true,
  })
  jugadorfechanacimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  jugadorpasaporte: string;

  @property({
    type: 'date',
    required: true,
  })
  jugadorpasaportevence: string;

  @property({
    type: 'number',
    required: true,
  })
  equipoid: number;

  @property({
    type: 'number',
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  jugadorposicion: string;

  @property({
    type: 'number',
    required: true,
  })
  jugadorpeso: number;

  @property({
    type: 'number',
    required: true,
  })
  jugadoraltura: number;


  constructor(data?: Partial<Jugador>) {
    super(data);
  }
}

export interface JugadorRelations {
  // describe navigational properties here
}

export type JugadorWithRelations = Jugador & JugadorRelations;
