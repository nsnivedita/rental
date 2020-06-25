const express = require('express');
const router = express.Router();
const Rental = require('../model/rental');

router.get('',(req,res)=>{
    Rental.find({},(err,foundRental) =>{
        res.json(foundRental);
    })
});

router.get('/:id',(req,res)=>{
    const rentalId = req.params.id;
    Rental.findById(rentalId,(err,foundRentalbyId) =>{
        if(err){
            res.status(422).send({errors:[{title: 'Rental Error',details: 'could not found rentals'}]
            });
        }
        res.json(foundRentalbyId);
    })
});

module.exports = router;