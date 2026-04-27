// @ts-ignore
import * as TableCompiler_MySQL from "knex/lib/dialects/mysql/schema/mysql-tablecompiler";

export class TableCompiler extends TableCompiler_MySQL {
  constructor(client: any, builder: any) {
    super(client, builder);
  }

  index(_columns: any, _indexName: any, _indexType: any) {
    // @ts-ignore
    this.client.logger.warn('Snowflake does not support the creation of indexes.');
  };

  dropIndex(_columns: any, _indexName: any) {
    // @ts-ignore
    this.client.logger.warn('Snowflake does not support the deletion of indexes.');
  };
}
