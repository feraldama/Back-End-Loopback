import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Equipo, EquipoRelations} from '../models';

export class EquipoRepository extends DefaultCrudRepository<
  Equipo,
  typeof Equipo.prototype.equipoid,
  EquipoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Equipo, dataSource);
  }
}
