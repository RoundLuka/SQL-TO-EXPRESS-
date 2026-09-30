const sql = require('mssql');

const config = {
    server: '127.0.0.1', // update me
    database: 'Online Market',                  // update me
    user: process.env.DB_USER,                      // update me
    password: process.env.DB_PASSWORD,                  // update me
    options: {
        encrypt: true,                          // True if you're on Microsoft Azure
        trustServerCertificate: true           // False for Azure (forces certificate validation)
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then((pool) => {
        console.log("Connected to MSSQL successfully!");
        return pool;
    });

module.exports = {
    sql,
    poolPromise
};
