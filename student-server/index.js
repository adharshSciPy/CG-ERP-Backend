const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
const connect = require('./mongodb/config');
const personalRoute = require('./routes/personalRoute');

dotenv.config()
const PORT = process.env.PORT

connect(); // mongoose connection

app.use(cors());
app.use(bodyParser.json());
app.use("/personalRoute", personalRoute);

app.listen(PORT, () => {console.log(`Server is porting ${PORT}`)})