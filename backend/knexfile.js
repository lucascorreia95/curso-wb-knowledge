module.exports = {
  client: 'postgresql',
  connection: {
    database: 'knowledge',
    user:     'wb_user',
    password: '12345678'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
