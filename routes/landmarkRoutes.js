const express=require('express');
const {landmarkController}=require('../controllers/landmarkController.js');
const routes = express.Router();

routes.route('/')
.get(landmarkController.getAllLandmarks)
.post(landmarkController.getLandmarkById)

routes.route('/:id')
.get(landmarkController.getLandmarkById)
.patch(landmarkController.updateLandmarkById)
.delete(landmarkController.deleteLandmarkById)
