module.exports = {

  development: {
    client: 'mysql2',
    connection: {
     
          host : '127.0.0.1',
          user : 'root',
          password : 'vertrigo',
          database : 'db_hiiro'
        
    },
    migrations: {
      directory: './src/Config/Database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password',
      host: 'us-cdbr-east-02.cleardb.com'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      database: 'heroku_f1e819702183423',
      user:     'b0f8eb0c3b9e69',
      password: '1f65ba43'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  desenvolvimento: {
    client: 'mysql',
      connection: {
        host : 'us-cdbr-east-02.cleardb.com',
        user : 'b0f8eb0c3b9e69',
        password : '1f65ba43',
        database : 'heroku_f1e819702183423'
      }
   }

};