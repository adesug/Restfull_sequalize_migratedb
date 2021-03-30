const mainRoutes = require('express').Router();
const makanRoutes = require("./makanRoutes");

mainRoutes.use('/makan', makanRoutes);

module.exports=mainRoutes;