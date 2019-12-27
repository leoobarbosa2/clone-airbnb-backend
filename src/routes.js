const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./app/controllers/SessionController');
const SpotController = require('./app/controllers/SpotController');
const DashboardConroller = require('./app/controllers/DashboardController');
const BookingController = require('./app/controllers/BookingController');

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.post('/sessions', SessionController.store);
routes.get('/spots', SpotController.index);

routes.get('/dashboard', DashboardConroller.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;
