
require('dotenv').config('variables.env');
module.exports = [
  {
    name: 'production',
    type: process.env.PROD_DB__TYPE,
    host: process.env.PROD_DB__HOST,
    port: process.env.PROD_DB__PORT,
    username: process.env.PROD_DB__USERNAME,
    password: process.env.PROD_DB__PASSWORD,
    database: process.env.PROD_DB__DBNAME,
    synchronize: process.env.PROD_DB__SYNCHRONIZE,
    logging: process.env.PROD_DB__LOGGING,
    entities: [
      'dist/entity/**/*.js'
    ],
    migrations: [
      'dist/migration/**/*.js'

    ],
    subscribers: [
      'dist/subscriber/**/*.js'
    ],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber'
    
    }
  },
  {
    name: 'development',
    type: process.env.DEV_DB__TYPE,
    host: process.env.DEV_DB____HOST,
    port: process.env.DEV_DB__PORT,
    username: process.env.DEV_DB__USERNAME,
    password: process.env.DEV_DB__PASSWORD,
    database: process.env.DEV_DB__DBNAME,
    synchronize: process.env.DEV_DB__SYNCHRONIZE,
    logging: process.env.DEV_DB__LOGGING,
    entities: [
      'dist/entity/**/*.js'
    ],
    migrations: [
      'dist/migration/**/*.js'

    ],
    subscribers: [
      'dist/subscriber/**/*.js'
    ],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber'
    
    }
  }


]
