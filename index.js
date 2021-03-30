require('dotenv').config({});
const express = require('express');
const mainRoutes = require('./src/routes');
const app = express();
const port = process.env.port || 3000;

// const mainRoutes = require('./src/routes');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/', mainRoutes);

app.listen(port, () => {
    console.log("server running");
})