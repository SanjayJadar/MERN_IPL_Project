import './App.css'; 
import AddPlayer from './components/form/add/AddPlayer';
import AddTeam from './components/form/add/AddTeam';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TeamDetails from './components/TeamDetails';
import PlayerDetails from './components/PlayerDetails'; 
import UpdatePlayer from './components/form/update/UpdatePlayer';
import UpdateTeam from './components/form/update/UpdateTeam';
import DeletedPage from './components/DeletedPage';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/teamDetails/playerDetails' element={<PlayerDetails/>}/>
          <Route exact path='/teamDetails' element={<TeamDetails/>}/>
          <Route exact path='/addPlayer' element={<AddPlayer/>}/>
          <Route exact path='/addTeam' element={<AddTeam/>}/>  
          <Route exact path='/player/update/:id' element={<UpdatePlayer/>}/> 
          <Route exact path='/team/update/:id' element={<UpdateTeam/>}/> 
          <Route exact path='/deletedSuccessfully' element={<DeletedPage/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
