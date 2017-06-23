'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/hibiskiss'
  },

  production: {
    client:'pg',
    connection:process.env.DATABASE_URL
  }
};
