import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function UpdateTeam() {

  const {id} = useParams();
  const [data, setData] = useState({teamName:'',  shortName:'', teamLogo:'',topBatsman:'', topBowler:'', championshipWonCount:''});
  const navigate = useNavigate();
    
  useEffect(()=>{
    const fetchData = async() =>{
        let api = await fetch('https://ipl-tpw3.onrender.com/team/'+id)
        api = await api.json()
        setData(api); 
    }
    fetchData();
  },[])

  const onChange = (e) => {
    setData({data, [e.target.name]:e.target.value})
  }

  const onSubmit = async(e) => {
    e.preventDefault(); 
    await fetch('https://ipl-tpw3.onrender.com/team/update/'+id,{
      method:'PUT',
      body:JSON.stringify(data),
      headers:{ 
        'Content-Type':'application/json'
      }
    })
    navigate('/');  
  }

  return (
    <>
    <div style={{margin:'20px'}}>
    <Link className='bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6 border border-green-700 rounded' to={`/`}>🔙 GO HOME</Link> 
    </div>
        <div className='flex justify-center'> 
        <div className="w-full max-w-lg">
            <h1 className='text-2xl antialiased font-mono text-red-500 text-center mt-6'>ADD Your TEAM</h1>
            <form className="bg-white shadow-md rounded px-20 pt-10 pb-12 mb-4 mt-6" onSubmit={onSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 mt-4 text-left" htmlFor="teamName">
                    Team Name
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  required type="text" name='teamName' value={data.teamName} onChange={onChange}/>
                </div>
    
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 mt-10 text-left" htmlFor="shortName">
                    Team in Short
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  required type="text" name='shortName' value={data.shortName} onChange={onChange}/>
                </div>
    
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 mt-10 text-left" htmlFor="teamLogo">
                    Team Logo
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  required type="text" name='teamLogo' value={data.teamLogo} onChange={onChange}/>
                </div>
    
                {/* <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 mt-10 text-left" for="teamBackground">
                    Team Background Image in URL
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  required type="text" name='teamBackground' value={data.teamBackground} onChange={onChange}/>
                </div> */}
    
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 mt-10 text-left" htmlFor="topBatsman">
                    Top Batsman
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  required type="text" name='topBatsman' value={data.topBatsman} onChange={onChange}/>
                </div>
    
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 mt-10 text-left" htmlFor="topBowler">
                    Top Bowler
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  required type="text" name='topBowler' value={data.topBowler} onChange={onChange}/>
                </div>
    
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 mt-10 text-left" htmlFor="championshipWonCount">
                    Championship Won Count
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  required type="number" name='championshipWonCount' value={data.championshipWonCount} onChange={onChange}/>
                </div>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold mx-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6">
                  UPDATE
                </button> 
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6" onClick={()=>navigate('/')}>
                  Cancel
                </button> 
            </form>
        </div>
      </div>
    </>
    )
}
    

