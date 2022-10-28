import {Entity, model, property} from '@loopback/repository';

@model()
export class ProSer extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Descripcion: string;

  @property({
    type: 'number',
    required: true,
  })
  Precio: number;


  constructor(data?: Partial<ProSer>) {
    super(data);
  }
}

export interface ProSerRelations {
  // describe navigational properties here
}

export type ProSerWithRelations = ProSer & ProSerRelations;
