const express = require('express');
const dotenv = require('dotenv').config();
const routes = require('./routes/router');
const connectDB = require('./config/db');

require('dotenv').config({path: __dirname +'/config.env'});

connectDB();
const app = express();
app.use(express.json());
app.use(routes);
app.use((req, res) => {
    res.status(404).json({
      message: 'Resource not found.',
    });
  });

app.listen(process.env.PORT, () => console.log(`Server listening on PORT ${process.env.PORT}`));