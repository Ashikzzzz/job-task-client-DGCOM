import React from 'react'
import { FaAlignRight, FaArrowRight, FaBeer, FaCashRegister, FaLocationArrow, FaPowerOff, FaRocketchat, FaSearchLocation } from 'react-icons/fa';
import mega from "../assets/img/mega.png"


const Rightbar = () => {
  return (
    <div className='bg-slate-50 rounded'>
 
    {/* first part  */}
          
        <div className='my-6'>
        <div className='mr-0'>
            <small className='text-gray-600 mr-80 '>Delivery</small>
        </div>
        <div className='flex justify-around items-center'>
         
            <div>
            <div className='flex items-center'>
            <FaSearchLocation></FaSearchLocation>
               <p>Dhaka, Dhaka North Banani Road no:12-9</p>
            </div>
            </div>
            <div>
                <span className='text-cyan-400'>change</span>
            </div>
        </div>
        <div>
        <hr className="hr bg-red-500 h-px w-10/12 mx-auto mt-4" />
        </div>
        </div>

        {/* second part  */}

        <div className='my-6'>
        <div className='mr-0'>
            <small className='text-gray-600 mr-80 '>Delivery</small>
        </div>
        <div className='flex justify-around items-center'>
         
            <div className='gap-x-1'>
            <div className='flex items-center'>
            <FaCashRegister></FaCashRegister>
               <p className=''><strong>Standard Delivery</strong> <span>20 Jul - 23 Jul</span></p>
            </div>
            </div>
            <div>
                <span className='text-cyan-400'>$79</span>
            </div>
        </div>
        <div >
        
        <p className='mr-56 mt-6'><small>Cash On Delivery possible</small> </p>
        </div>
        <div>
        <hr className="hr bg-red-500 h-px w-10/12 mx-auto mt-4" />
        </div>
        </div>

        {/* third part  */}

        <div className='my-6'>
        <div className='flex items-center justify-evenly'>
            <small className='text-gray-600 mr-80 '>Service</small>
            <FaPowerOff className='text-xs'></FaPowerOff>
        </div>
        <div className=''>
         
            <div className='gap-x-1'>
            <div className='flex items-center ml-10'>
            <FaArrowRight className='text-xs text-blue-700 mt-2'></FaArrowRight>
               <p className='mt-2'><small>100% Authentic</small></p>
            </div>
            </div>
            <div className='flex items-center ml-10'>
            <FaArrowRight className='text-xs text-blue-700 mt-2'></FaArrowRight>
            <p className=''><small>14 days Easy return</small></p>
            
            </div>
            <div>
            <small className='text-gray-400 mr-48'>Change of Mind applicable</small>
            </div>
           
        </div>
        <div >
        
        <p className='mr-56 mt-6'><small>2 Years Seller Warranty</small> </p>
        </div>
        <div>
        <hr className="hr bg-red-500 h-px w-10/12 mx-auto mt-4" />
        </div>



        </div>

            {/* ** */}
            
        <div className='my-6'>
        <div className='flex items-center justify-evenly'>
            <small className='text-gray-600 mr-80 '>Sold By</small>    
        </div>
       <div className='flex items-center justify-evenly'>
        <div className='mr-40'>
            <h1 className='text-2xl'>DECATHLON</h1>
        </div>
        <div className='flex items-center'>
                <FaRocketchat></FaRocketchat>
                <h3 className='font-semibold text-cyan-600'>Chat</h3>
        </div>
       </div>
       <div className='ml-8'>
        <img className='w-1/3 h-16 ' src={mega}></img>
       </div>
        </div>
        <div className=''>
        <hr className="hr bg-red-500  w-full mx-auto mt-4" />
        </div>

        <div className='flex items-center justify-evenly'>
            <div>
                <p><small className='text-gray-400'>Positive Seller Ratings</small></p>
                <h2 className='text-3xl'>93%</h2>
            </div>
            <div>
            <p><small className='text-gray-400'>Ship on time</small></p>
            <h2 className='text-3xl'>100%</h2>
            </div>
            <div>
            <p><small className='text-gray-400'>Chat response Rate</small></p>
            <h2 className='text-3xl'>88%</h2>
            </div>
        </div>
        <div className=''>
        <hr className="hr bg-red-500  w-full mx-auto mt-4" />
        </div>
        <p className='text-cyan-600 font-bold'><small>View Store</small></p>
    </div>
  )
}

export default Rightbar