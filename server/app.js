
// main modules
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config()
// database utils
const { poolPromise } = require('./config/db');

// Imoporting routers
const productRouter = require('./routers/products.router');
const globalErrorHanlder = require('./controllers/error.controller');
const authRouter = require('./routers/auth.router');



const app = express();

// middleware

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// using routers
app.use("/api/auth", authRouter)
app.use('/api/products', productRouter)

// Global error handler middleware
app.use(globalErrorHanlder)

// connecting to sql database
poolPromise
    .then(() => {
        // running server
        app.listen(3000, () => console.log("Server is running"))
    })
    .catch((err) => {
        console.error("Unable to connect to the database", err);
        process.exitCode = 1;
    });
