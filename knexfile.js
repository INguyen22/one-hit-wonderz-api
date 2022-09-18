// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
    //   host : '127.0.0.1',
      port : 5432,
      user : process.env.DB_USER,
      database : 'onehitwonderzz'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      url: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production'
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
