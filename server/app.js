const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const connectToDatabase = require('./config/db');

// constants
const PORT = 3000

const app = express();

// middleware

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// app.get('/', (req, res, next) => {
//     select * 
// })


const database = connectToDatabase()
    .then(() => {
        app.listen(PORT, () => console.log("Server is running"))
    })
    .catch((err) => console.error(err));

app.get('/', async (req, res) => {
    const result = await database.request().query('SELECT * from Cars');
    console.log(result);
})
