const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    playerName: String,
    from: String,
    price: String, 
    description: String,
    playerImg: String
})

const PlayerCollection = mongoose.model('player', playerSchema);

module.exports = PlayerCollection;