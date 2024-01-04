import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddPlayer() {

    const navigate = useNavigate();

    const [data, setData] = useState({playerName:'', from:'',  price:'', description:'', playerImg:''});

    const [teams, setTeams] = useState([])

    // Set value to Input Data
    const onChange = (e) => {
        setData({...data, [e.target.name]:e.target.value});
    }

    // Pass Player Data to Backend
    const onSubmit = async(e) => {
        e.preventDefault();
        try { 
          await fetch('https://ipl-tpw3.onrender.com/player/add',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
              'Content-Type':'application/json'
            }
          })
          .then(res=>{  
              alert('Posted Successfully');
              navigate('/profile') 
          })
          .catch(e=>console.log(e.message));
          navigate('/');
      } catch (error) {
          // Handle errors here, e.g., show an error message to the user.
          console.error('Error:', error);
      }
    }

    // Fetching api data for teams to show while adding player
    useEffect(()=>{
      const fetchData = async() => {
          let api = await fetch('https://ipl-tpw3.onrender.com/teams')
          api = await api.json()
          setTeams(api);
      }
      fetchData();
    }, [])

  return (
    <>
    <div style={{margin:'20px'}}>
    <Link className='bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6 border border-green-700 rounded' to={`/`}>🔙 GO HOME</Link> 
    </div>
    <div className='flex justify-center'> 
    <div className="w-full max-w-lg">
        <h1 className='text-2xl antialiased font-mono text-red-500 text-center mt-6'>ADD Your PLAYER</h1>
        <form className="bg-white shadow-md rounded px-20 pt-10 pb-12 mb-4 mt-6" onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-4 text-left" htmlFor="teamName">
                Player Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  required type="text" name='playerName' value={data.playerName} onChange={onChange}/>
            </div>

            <div className="mb-4">
            <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select Player Team
            </label>
            <select id="countries" name='from' value={data.from} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Choose a country</option>
              {teams.map((item, index)=>
                <option key={index} value={item.shortName}>{item.shortName}</option>
              )}
            </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-4 text-left" htmlFor="teamName">
                Price
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  required type="text" name='price' value={data.price} onChange={onChange}/>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-4 text-left" htmlFor="teamName">
                Description
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  required type="text" name='description' value={data.description} onChange={onChange}/>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-4 text-left" htmlFor="teamName">
                Player Image in URL
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  required type="text" name='playerImg' value={data.playerImg} onChange={onChange}/>
            </div> 
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6">
              ADD
            </button> 
        </form>
    </div>
    </div>
    </>
  )
}
