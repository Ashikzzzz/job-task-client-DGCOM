import React, { useEffect, useState } from 'react'
import shoe2 from "../assets/img/shoe2.jpg"

const Leftbar = () => {
  const [images,setImages]= useState([])

useEffect(()=>{
  fetch("http://localhost:5000/api/v1/image/getting-image-base64-formate")
  .then(res => res.json())
  .then(data =>{
    console.log(data?.data)
    setImages(data?.data)
  })
},[])


  return (
    <div className='bg-white w-full'>
        
       <div>
       <img className='w-full rounded' src={shoe2}></img>
       </div>
        {
          images?.data?.map(image =>{
            return <div>
              <img src={image?.picture}></img>
            </div>
          })
        }
    </div>
  )
}

export default Leftbar