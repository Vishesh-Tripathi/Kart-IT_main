import React, { useState } from 'react';
// import { createContext, useState, useEffect, useContext } from "react";
// import { account } from "../appwriteConfig";
import authservice from "../../appwrite/Auth";
import toast from 'react-hot-toast'
import { Link, useNavigate } from "react-router-dom";
// import { ID} from 'appwrite';
import {ID} from 'appwrite'
import Navbar from "../../components/navbar/Navbar";

// import { account } from '../appwriteConfig';

const Signup = () => {
  const [loading,setLoading]=useState(false);

  // navigate
  const navigate=useNavigate();

  const [userSignup, setUserSignup] = useState({
      name: "",
      email: "",
      password: "",
      labels:"user"
  });
  const event=()=>{
      if(userSignup.name==""||userSignup.password==""||userSignup.email==""){
          toast.error("All fiield required to be filled")
          return ;
      }
      setLoading(true);
      const b=authservice.CreateAccount(userSignup);
      if(b){
          setUserSignup({
              ...Signup,
              name:"",
              email:"",
              password:""
          })
          setLoading(false);
          toast.success("Signup Successful");
          navigate('/login');
      }
      setUserSignup({
          ...Signup,
          name:"",
          email:"",
          password:""
      })
      setLoading(false);
      // console.log(b);
  }

  return (
    <>
       <Navbar/>
     <div className='overflow-x-hidden overflow-y-hidden '>
      <div className="flex ">
        <div className=" w-full   sm:mt-1 sm:w-[50%]">
          <img className=" ml-16    sm:mt-[-35px] sm:ml-44" src="https://webstockreview.net/images250_/clipart-dolphin-svg-6.png" style={{ width: '257px' }} alt="logo" />
          <h1 className=" ml-16 mt-[-62px] sm:mt-[-60px] sm:ml-[141px] font-bold text-3xl">We are the Team <span className='ml-12 sm:ml-0 text-blue-700'>Sampann</span></h1>
          <h3 className="ml-[72px] mt-4  sm:mt-[45px] sm:ml-[180px]  ">Please Enter deatils to recover your account</h3>
          <form action=""> 
          <div><input className=" mr-[250px] mt-[20px] ml-[50px] shadow appearance-none border h-[50px] rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="text" placeholder="Name"    value={userSignup.name}
                        onChange={(e)=>{
                            setUserSignup({
                                ...userSignup,
                                name:e.target.value
                        })
                        }} /></div>
         
          <div><input className=" mr-[250px] mt-[20px] ml-[50px] shadow appearance-none border h-[50px] rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="text"  value={userSignup.email}
                        onChange={(e)=>{
                            setUserSignup({
                                ...userSignup,
                                email:e.target.value
                        })
                        }} placeholder="Email address" /></div>

          <div><input className=" mr-[250px] mt-[20px] ml-[50px] shadow appearance-none border h-[50px] rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="password" value={userSignup.password}
                        onChange={(e)=>{
                            setUserSignup({
                                ...userSignup,
                                password:e.target.value
                        })
                        }}  placeholder="Password" /></div>
         
          </form>
          <div className=" flex ml-[52px] mt-[16px] gap-2"><input className='mt-1' type="checkbox" />
            <h1>I have read and agree to the terms</h1>
          </div>
          <button className="ml-[50px] mt-[20px]  shadow appearance-none border rounded w-[80%] h-[53px] py-2 px-3 hover:bg-blue-800 bg-blue-600 text-white font-bold leading-tight focus:outline-none focus:shadow-outline" type='submit' onClick={event}>Sign Up</button>
          <div className="text-center mt-[10px] ml-[19px] ">


            Already have an accout?<span><Link to={"/login"} className=' border'>login</Link></span>


          </div>


        </div>
        <div className=" invisible sm:w-[50%] sm:h-auto sm:visible items-center justify-center ">
          {/* <h1 className="  items-center justify-center text-center p-48 text-3xl font-bold ">We are not just a Company</h1>
        <p className="w-[70%] mt-[-150px] ml-[160px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at quasi, possimus dignissimos, iste pariatur labore rem expedita natus modi vitae. Officiis, sequi.</p> */}
          <img className='sm:w-[80%] sm:h-[100%] sm:ml-0 sm:mt-20' src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="" />
        </div>
      </div>
    </div>
    </>
   
  );
}

export default Signup