import React, { useState } from 'react'
import mall from "../assets/img/mall.png"
import { FaFileInvoice, FaMinus, FaPlus, FaShare, FaShareAlt, FaStar } from 'react-icons/fa'
import shop from "../assets/img/shop.jpg"


const Shop = () => {

    const [counter, setCounter]= useState(0)

  return (
    <div>
        <div className='flex justify-center items-center'>
            <div>
                <img className='w-full' src={mall}></img>
            </div>
            <div>
                <h1 className='text-2xl font-semibold'>Decathlon Men's Soft 140 Mesh M Walking Shoe - Grey</h1>
            </div>
        </div>

       <div className='flex items-center justify-evenly'>
       <div className='flex'>
            <FaStar className='text-yellow-500 text-xs'></FaStar>
            <FaStar className='text-yellow-500 text-xs'></FaStar>
            <FaStar className='text-yellow-500 text-xs'></FaStar>
            <FaStar className='text-yellow-500 text-xs'></FaStar>
            <FaStar className='text-yellow-500 text-xs'></FaStar>
        </div>
        <div className='flex items-center justify-evenly'>
            <p className='text-blue-600'><small>15 Questions</small></p>
            <p>|</p>
            <p className='text-blue-600'><small>5 Answered Questions</small></p>
        </div>
        <div className='flex items-center justify-evenly'>
           <FaShareAlt className='text-gray-500'></FaShareAlt>
            <FaFileInvoice className='text-gray-500'></FaFileInvoice>
        </div>
       </div>

        <div className='flex justify-evenly items-center'>
        <p className='text-blue-600'><small>NEWFEEL by Decathlon</small></p>
        <p>|</p>
        <p className='text-blue-600'><small>More Shoes & Clothing from NEWFEEL by Decathlon</small></p>
        </div>

        <div>
            <img className='mt-4' src={shop}></img>
        </div>

        <div>
            <h2 className='text-orange-600 text-4xl mr-80 mt-2 '>$ 1779</h2>
        </div>
        <div>
        <hr className="hr bg-red-500  w-full mx-auto mt-4" />
        </div>

            <div>
                <div className='my-2'>
                    <p className='text-gray-500 mr-80 font-bold'><small>Size</small></p>
                </div>
                <div className='flex items-center justify-around ml-12'>
                     <div className='border p-2'>40</div>
                     <div className='border p-2'>42</div>
                     <div className='border p-2'>44</div>
                     <div className='border p-2'>46</div>
                     <div className='border p-2'>48</div>
                     <div className='border p-2'>50</div>
                     <div className='border p-2'>50</div>
                </div>
            </div>
            <div>
        <hr className="hr bg-red-500  w-full mx-auto mt-4" />
        </div>

       <div>
       <div className='my-2'>
        <p className='text-gray-500 mr-80 font-bold'><small>Quantity</small></p>
        </div>
        <div className='flex items-center justify-evenly my-2'>
            <div className='border p-2'><FaPlus onClick={()=>setCounter(counter+1)}></FaPlus></div>
            <div>{counter}</div>
            <div className='border p-2'><FaMinus onClick={()=>setCounter(counter-1)}></FaMinus></div>
        </div>
       </div>
        <div className='flex justify-evenly mt-8'>
            <div>
            <button className="btn btn-info px-14">Buy Now</button>
            </div>
            <div>
            <button className="btn bg-orange-500 px-14">Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default Shop