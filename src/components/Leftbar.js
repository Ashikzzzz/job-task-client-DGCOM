import React, { useEffect, useState } from 'react'
import shoe2 from "../assets/img/shoe2.jpg"

const Leftbar = () => {
  const [images,setImages]= useState([])

useEffect(()=>{
  fetch("http://localhost:5000/api/v1/image/getting-image-base64-formate")
  .then(res => res.json())
  .then(data =>{
    // console.log(data?.data)
    setImages(data?.data)
  })
},[])

console.log(images)
  return (
    <div className='bg-white w-full'>
        
       <div>
       <img className='w-full rounded' src={shoe2} alt=""></img>
       </div>
      
      <div className='grid lg:grid-cols-4 grid-cols-1 mt-10 bg-slate-100 p-5'>
      {
          images?.map(image =>{
            return <div>
              <img className='w-20' src={`data:image/jpeg;base64,${image?.picture}`} alt=""/>
             
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Leftbar

