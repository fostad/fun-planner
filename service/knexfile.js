const config = {
  development: {
    client: 'pg',
    connection: {
      database: 'postgres',
      user:     'postgres',
      password: '1360',
      host: 'docker-host',
      port: 5432
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

module.exports = config['development'];
