const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    teamName: String,
    shortName: String,
    teamLogo: String, 
    // teamBackground: String, 
    topBatsman: String,
    topBowler: String,
    championshipWonCount: Number
})

const TeamCollection = mongoose.model('team', teamSchema);

module.exports = TeamCollection;