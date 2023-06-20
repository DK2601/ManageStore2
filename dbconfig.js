
const config = {
  user: 'sa',
  password: '123456',
  database: 'QLCH',
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
    enableArithAbort: true
  },
  port: 1433, 
}







module.exports = config;


