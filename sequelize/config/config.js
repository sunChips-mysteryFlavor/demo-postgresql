module.exports ={
  development: {
    username: 'mark',
    password: 'mark',
    database: 'products',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'root',
    password: null,
    database: 'qa',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  }
}
