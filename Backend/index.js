const express = require('express'); 
const cors = require('cors'); 
const DataBase = require('./database');                              // Database Connection
const server = express();
server.use(cors({
    origin: '*', // Allow requests from any origin
    credentials: true, // Allow credentials (cookies) to be sent with requests
  }));
server.use(express.json());


// Connect mongodb
DataBase();

server.get('/',(req, res)=>{
    res.json({"id":"hello"});
})
 
// Player 
server.use('/', require('./Routes/Player')); 

// Team
server.use('/', require('./Routes/Team')); 

//Connect Server 
const port = process.env.PORT || 8000
server.listen(port, ()=>{
    console.log('Server Connected'+port);
})








// Request URLS 

// http://localhost:8080/players => To Get all Players
// http://localhost:8080/player/add => To Post new Player
// http://localhost:8080/player/:id  => To Get a Player
// http://localhost:8080/player/update/:id => To Update a Player
// http://localhost:8080/player/delete/:id => To Delete a Player

// http://localhost:8080/teams => To Get all Teams
// http://localhost:8080/team/add => To Post new Team
// http://localhost:8080/team/:id => To Get a Team
// http://localhost:8080/team/update/:id => To Update a Team
// http://localhost:8080/team/delete/:id => To Delete a Team