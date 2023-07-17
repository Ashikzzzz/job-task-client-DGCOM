import React from 'react'
import mall from "../assets/img/mall.png"
import { FaFileInvoice, FaShare, FaShareAlt, FaStar } from 'react-icons/fa'
import shop from "../assets/img/shop.jpg"

const Shop = () => {
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
            <h2 className='text-orange-600 text-4xl mr-80 mt-2'>$ 1779</h2>
        </div>

    </div>
  )
}

export default Shop