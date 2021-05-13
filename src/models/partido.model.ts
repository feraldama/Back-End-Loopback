import { Entity, model, property } from "@loopback/repository";

@model()
export class Partido extends Entity {
  @property({
    type: "number",
    id: true,
    generated: true,
  })
  partidoid?: number;

  @property({
    type: "date",
    required: true,
  })
  partidofecha: string;

  // @property({
  //   type: 'date',
  // })
  // partidohora?: string;

  @property({
    type: "number",
    required: true,
  })
  estadioid: number;

  @property({
    type: "number",
    required: true,
  })
  faseid: number;

  @property({
    type: "number",
    required: true,
  })
  arbitroid: number;

  @property({
    type: "number",
    required: true,
  })
  paislocal: number;

  @property({
    type: "number",
    required: true,
  })
  paisvisitante: number;

  constructor(data?: Partial<Partido>) {
    super(data);
  }
}

export interface PartidoRelations {
  // describe navigational properties here
}

export type PartidoWithRelations = Partido & PartidoRelations;
