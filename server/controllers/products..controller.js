const { poolPromise } = require('../config/db');
const catchAsync = require('../utils/catchAsync');

const getProducts = catchAsync(async (req, res) => {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM Cars');
    res.json(result.recordset);
})

const addProduct = catchAsync(async (req, res, next) => {
})


module.exports = {
    getProducts
}