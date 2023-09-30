const express = require('express');
const mongoose = require('mongoose');
const TeamCollection = require('../schema/teamSchema');
const router = express.Router();

// Get data of All Teams
router.get('/teams', async(req, res)=>{
    await TeamCollection.find({})
    .then(data=>res.json(data))
})

// Post new Team
router.post('/team/add', async(req, res)=>{
    await TeamCollection.create(req.body)
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

// Get a particular Team
router.get('/team/:id', async(req, res)=>{
    let id = req.params.id;
    await TeamCollection.findById({_id:id})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}) 

// Update team details
router.put('/team/update/:id', async(req, res)=>{
    let id = req.params.id;
    await TeamCollection.findByIdAndUpdate({_id:id}, {
        teamName : req.body.teamName,
        shortName : req.body.shortName,
        teamLogo : req.body.teamLogo,
        topBatsman : req.body.topBatsman,
        topBowler : req.body.topBowler,
        championshipWonCount : req.body.championshipWonCount  
    })
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

// Delete Team
router.delete('/team/delete/:id', async(req, res)=>{
    let id = req.params.id;
    await TeamCollection.findByIdAndDelete({_id:id})
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
})

module.exports = router