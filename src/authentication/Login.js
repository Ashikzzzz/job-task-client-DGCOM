import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react';
import animation from "../assets/animation/animation_lk5um5zg.json"

const Login = () => {

    const navigate = useNavigate()

    const handleLogin=(e)=>{
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value 
      const loginData ={
         email,
        password
      }
      console.log(loginData)
  
      fetch("http://localhost:5000/api/v1/users/log-in",{
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(loginData)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        // if(data?.status ==="active"){
        //     alert(data?.massage)
        //     const token = data?.data?.token
        //     localStorage.setItem("token",token)
        //     navigate("/")
        // }
      })
  
    }


  return (
    <div>
    <div>
    <div>
    <h1 className='text-5xl font-bold mt-16 text-center text-cyan-900'>Login Here</h1>
    <div className='grid lg:grid-cols-2 grid-cols-1'>
           {/* lottie  */}
    <div className='flex items-center '>
                <Lottie className='w-96 ml-28' animationData={animation} loop={true} />
            </div>

         <form onSubmit={handleLogin}>
         <div className='grid grid-cols-1'>
          
            <div className='mt-1'>
            <label className="label">
                <span className="label-text"> Your Email?</span>
           </label>
            <input name='email' type="text" placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs " />
            </div>
            <div className='mt-1'>
            <label className="label">
                <span className="label-text"> Your password?</span>
           </label>
            <input type="text" name='password' placeholder="Your Password" className="input input-bordered input-primary w-full max-w-xs " />
            </div>
           
           
          </div>
          <p className='font-normal text-sm mt-1'> Already Have an Account?<Link className='underline' to="/signup"> Click here</Link> </p>
           <button type='submit' className="text-sm mt-6  w-1/2 mx-auto border-b-2  btn btn-primary ">
                Log In
           </button>
          
         </form>

    </div>
</div>
</div>
</div>
  )
}

export default Login