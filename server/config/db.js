const sql = require('mssql');

const config = {
    server: '127.0.0.1', // update me
    database: 'AutoShop',                  // update me
    user: 'Luka',                      // update me
    password: 'lukaluka',                  // update me
    options: {
        encrypt: true,                          // True if you're on Microsoft Azure
        trustServerCertificate: true           // False for Azure (forces certificate validation)
    }
};

async function connectToDatabase() {
    // 2. Establish the connection pool
    const pool = await sql.connect(config);
    console.log("Connected to MSSQL successfully!");

    return pool
}

module.exports = connectToDatabase;
