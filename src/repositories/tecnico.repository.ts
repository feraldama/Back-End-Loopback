import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tecnico, TecnicoRelations} from '../models';

export class TecnicoRepository extends DefaultCrudRepository<
  Tecnico,
  typeof Tecnico.prototype.tecnicoid,
  TecnicoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tecnico, dataSource);
  }
}
