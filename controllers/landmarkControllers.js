const fs = require('fs');
const Landmark = require('../models/landmarkModel');

exports.getAllLandmarks = (req,res)=>{

    res.status(200).json({
        status:"success"
    });
}

exports.getLandmarkById = (req,res)=>{

    console.log(req.params);

    var id=req.params.id*l;
    res.status(200).json({
        status:"success",
        data: {
            landmark
        }
    });
};