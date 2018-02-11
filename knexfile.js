// Update with your config settings.

require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'bloghomework',
      localhost: 3001
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
