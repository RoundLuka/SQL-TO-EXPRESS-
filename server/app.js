const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const { poolPromise } = require('./config/db');
const productRouter = require('./routers/products.router');


const app = express();

// middleware

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// using routers

app.use('/api/products', productRouter)

poolPromise
    .then(() => {
        app.listen(3000, () => console.log("Server is running"))
    })
    .catch((err) => {
        console.error("Unable to connect to the database", err);
        process.exitCode = 1;
    });
