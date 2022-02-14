const express = require("express")
const app = express()
// ------- for accesing data in req.body
const bodyParser = require('body-parser')
app.use(bodyParser.json());
// -------

require('dotenv').config()

const Database = require("./db/connect")
const routes = require('./routes/tasks')
const notFound = require("./middlewares/notfound")
const errorhandler = require("./middlewares/errorhandler")


// middlewares 

app.use(express.json())
// routes
app.use("/api/tasks", routes)
// page not found
app.use(notFound)
// error handler
app.use(errorhandler)


const port  = process.env.PORT || 3009

const start = async () => 
{
    try {
        await Database(process.env.DB_STRING)
        app.listen(port, console.log(`server is listening on port: ${port}`))
    } catch (err) {
        console.log(err)
    }
}

start()

