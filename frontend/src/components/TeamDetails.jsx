import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function TeamDetails() {
    const location = useLocation(); 

    const navigate = useNavigate();

    const [data, setData] = useState([]); 
    
    
    useEffect(()=>{
        const fetchApi = async() => {
            try{
                let apiData = await axios.get('https://ipl-tpw3.onrender.com/players');  
                setData(apiData.data.filter(item=>item.from.includes(location.state.team.shortName)));
            } catch(error){
                console.log(error)
            }        
        }
        fetchApi();   
    },[])

    const deleteteam = async() => { 
        
            await fetch('https://ipl-tpw3.onrender.comlete/'+location.state.team._id, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
            })   
    }
 
  return (
    <div className='bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600'>  
        <div className='flex justify-between'>
            <Link className='bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6 border border-green-700 rounded' to={`/`}>🔙 GO HOME</Link> 
        <div className='flex justify-end pt-8'>
            <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' to={`/team/update/${location.state.team._id}`}>Update</Link>
            <Link className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded mx-12' onClick={deleteteam} to={'/deletedSuccessfully'}>Delete</Link> 
        </div>
        </div>
        <div className='grid grid-cols-2 pb-28 pt-8'>
            <div className='flex justify-center'>
                <img style={{height:'400px'}} src={location.state.team.teamLogo} alt="" />
            </div>
            <div className='basis-1/2 flex flex-col items-start ml-24 mt-24'>
                <h3 className="mb-2 text-2xl font-bold leading-loose  tracking-tight text-gray-900 dark:text-white">{location.state.team.teamName}</h3>
                <h5 className="mb-2 text-xl font-semibold leading-loose tracking-tight text-gray-900 dark:text-white">Top Batsman : {location.state.team.topBatsman}</h5>
                {/* <h5 className="mb-2 text-xl font-semibold leading-loose tracking-tight text-gray-900 dark:text-white">{location.state.team.topBowler}</h5> */}
                <h5 className="mb-2 text-xl font-semibold leading-loose tracking-tight text-gray-900 dark:text-white">Top Bowler : {location.state.team.topBowler}</h5>
                <h5 className="mb-2 text-xl font-semibold leading-loose tracking-tight text-gray-900 dark:text-white">Champions : {location.state.team.championshipWonCount} time Champion</h5>
            </div>
        </div>
        <div className='grid grid-cols-4 gap-20 mx-24'> 
            {data.map((item, index)=>{
                return (
                    <div className='rounded bg-gradient-to-r from-purple-600 to-blue-600 my-10' style={{cursor:'pointer'}} key={index} onClick={()=>{ navigate('/teamDetails/playerDetails', {state:{player:item}}) }}>
                        <img style={{height:'350px'}} src={item.playerImg} alt='Player Img'/>
                        <h3 className='text-xl font-sans my-4 text-white'>{item.playerName}</h3>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
