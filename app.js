const express = require("express")
const cors = require("cors")
const morgan = require("morgan");
const { dbConnect } = require("./config/mongo")
const app = express()

require("dotenv").config()

const PORT = process.env.PORT;

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/api', require('./routers'))

app.listen(PORT, () => {
    console.log(`🚀 Run server in http://localhost:${PORT}`);
});

dbConnect()