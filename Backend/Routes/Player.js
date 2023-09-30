const mongoose = require('mongoose');
const express = require('express');
const PlayerCollection = require('../schema/playerSchema');
const router = express.Router();


// Get data of all Players
router.get('/players', async(req, res)=>{
    await PlayerCollection.find({})
    .then(data=>res.json(data))
})

// Post new player
router.post('/player/add', async(req, res)=>{
    await PlayerCollection.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

// Get a Particular Player
router.get('/player/:id', async(req, res)=>{
    let id = req.params.id;
    await PlayerCollection.findById({_id:id})
    .then(data=>res.json(data))
    .catch(err=>res.send(err))
})

// Update a Player Details
router.put('/player/update/:id', async(req, res)=>{
    let id = req.params.id;
    await PlayerCollection.findByIdAndUpdate({_id:id}, {
        playerName : req.body.playerName,
        from : req.body.from,
        price : req.body.price,
        description : req.body.description,
        playerImg : req.body.playerImg 
    })
    .then(data=>res.json(data))
    .catch(err=>res.send(err))
})

// Delete player
router.delete('/player/delete/:id', async(req, res)=>{
    let id = req.params.id;
    await PlayerCollection.findByIdAndDelete({_id:id})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

module.exports = router;