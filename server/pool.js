const pg = require('pg');
const url = require('url');
let config = {
  database: 'koala_db',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('connected to postgres');
});

pool.on('error', (err) => {
  console.log('err connecting to postgres', err);
});

if (process.env.DATABASE_URL) {
  let params = url.parse(process.env.DATABASE_URL);
  let auth = params.auth.split(':');

  config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    dataase: params.pathname.split('/')[1],
    ssl: { rejectedUnauthorized: false },
    max: 10,
    idleTimeoutMillis: 30000,
  };
} else {
  config = {
    user: process.env.PG_USER || null,
    password: process.env.DATABASE_SECRET || null,
    host: process.env.DATABASE_SERVER || 'localhost',
    port: process.env.DATABASE_PORT || 5432,
    database: process.env.DATABASE_NAME || 'koala_db',
    max: 10,
    idleTimeoutMillis: 30000,
  };
}

module.exports = new pg.Pool(config);
