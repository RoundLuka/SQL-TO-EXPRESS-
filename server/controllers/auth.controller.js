
// utils
const { poolPromise } = require("../config/db");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

const signup = catchAsync(async (req, res, next) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password) {
        return new AppError(400, "Username, email and password are required")
    }

    // VALIDATING USER DATA // SECURITY

    const queryCmd = `INSERT INTO Users VALUES ('${username}', '${email}', '${password}')`

    const pool = await poolPromise;1
    const result = await pool.request().query(queryCmd)
    

    res.status(200).json({
        message: "Account created succesfully"
    })
})

module.exports = signup