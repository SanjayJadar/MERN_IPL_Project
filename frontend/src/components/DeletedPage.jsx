import React from 'react'
import { Link } from 'react-router-dom'

export default function DeletedPage() {
  return (
    <div>
        <img style={{height:'900px'}} className='mx-auto block' src="httpss://static.vecteezy.com/system/resources/previews/005/266/445/original/successfully-deleted-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" alt="" />
        <Link className='bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6 border border-green-700 rounded' to={`/`}>🔙 GO HOME</Link> 
    </div>
  )
}
