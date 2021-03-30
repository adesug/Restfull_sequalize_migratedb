const makanRoutes = require('express').Router();
const makanController = require('../controllers/makanController');
const makanControllers = require('../controllers/makanController');


makanRoutes.get('/', makanControllers.getAllMakanan);
makanRoutes.post('/', makanControllers.createNewMakan);
makanRoutes.get('/:id', makanControllers.getMakanId);
makanRoutes.put('/:id', makanControllers.updateMakanan);
makanRoutes.delete('/:id', makanController.deleteDataMakan);


module.exports = makanRoutes;
