import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function PlayerDetails() {

    const location = useLocation(); 

    const deletePlayer = async() => {
        await fetch('https://ipl-tpw3.onrender.comdelete/'+location.state.player._id, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        }) 
    }

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500 italic font-semibold text-white">
        <div className='flex justify-between'>
            <Link className='bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6 border border-green-700 rounded' to={`/`}>🔙 GO HOME</Link> 
        <div className='flex justify-end pt-5'>
            <Link className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' to={`/player/update/${location.state.player._id}`}>Update</Link>
            <Link className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded mx-12' onClick={deletePlayer} to={'/deletedSuccessfully'}>Delete</Link> 
        </div>
        </div>
      <img  style={{height:'700px',display:'block',marginLeft:'auto',marginRight:'auto'}} src={location.state.player.playerImg} alt="" />
      <h1 className='text-6xl p-6'>{location.state.player.playerName}</h1>
      <div className=''>
        {/* <h1 className='text-3xl p-3'>{location.state.player.playerTeam}</h1> */}
        <h1 className='text-3xl p-4'>{location.state.player.description}</h1>
        <h1 className='text-3xl p-4'>{location.state.player.price}</h1>
      </div> 
    </div>
  )
}
