import React, { useEffect, useState } from 'react'  
import { Link, useNavigate} from 'react-router-dom'

export default function Home() { 

    const navigate = useNavigate();
    
    const [data, setData] = useState([]);

    const fetchData = async() => {
        let apiData = await fetch('http://localhost:8080/teams');
        apiData = await apiData.json() 
        setData(apiData);
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 ..."> 
        <header className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... pb-6 pt-4">
            <span className='max-w-lg text-4xl font-semibold leading-loose mr-96 text-rose-600'>Welcome to, Time Wasting Show</span> 
            <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' to='/addPlayer'>Add Player</Link>
            <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-12' to='/addTeam'>Add Team</Link> 
        </header>
        <div className='grid grid-cols-4 gap-24 place-items-center py-12 px-8'>
            {data.map((item, index)=> {
                return ( 
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer" key={index} onClick={()=>{ navigate('/teamDetails', {state:{team:item}}) }}> 
                            <img className="rounded-t-lg" src={item.teamLogo} alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.teamName}</h5> 
                            </div>
                        </div> 
                )
            })} 

        </div>
    </div>
  )
}
