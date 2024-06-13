import React from 'react'
import { createContext, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast"

import authservice from "../../appwrite/Auth";

import Navbar from "../../components/navbar/Navbar";
import logo3 from "../../assets/assets/category/logo3.png"

import service from '../../appwrite/config';

import Loader from '../../components/loader/Loader';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
const categoryList = [
    {
        name: 'None',
        select : 'disabled'
        
    },
    {
        name: 'Fashion',
       
    },
    {
        name: 'Electronics'
    },
    {
        name: 'Home & Furniture'
    },
    {
        name: 'Appliances'
    },
    {
        name: 'Beauty & HealthCare                   '
    },
    {
        name: 'Grocery'
    },
    {
        name: 'Sationary'
    },
    {
        name: 'Gaming'
    }
  ]



function AddProductPage() {
    const[name,setName]= useState("Please Login")
    const user=JSON.parse(localStorage.getItem('user'));
    useEffect(()=>{
        if(user){
            setName(user.name)
           
        }
        // console.log(user)
      },[user])
    //   const nam = name;
      var firstName = name.split(' ').slice(0, -1).join(' ');
    const navigate=useNavigate();
    const [loading,setLoading]=useState(false);
    const [product,setproduct]=useState({
          title: "",
          price: "",
          productImageUrl: "",
          category: "",
          description: "",
          quantity : "",
          time: new Date().toLocaleTimeString(),
          date: new Date().toLocaleString(
              "en-US",
              {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
              }
          )
    })
    const AddProductFunction=async()=>{
        if (product.title == "" || product.price == "" || product.productImageUrl == "" || product.category == "" || product.description == "" || product.quantity =="") {
          return toast.error("all fields are required")
        }
        setLoading(true);
        try{
          const a=await service.AddDoc(product);
          if(a){
            toast.success("Add Product successfuly")
            navigate('/admin-dashboard')
          }
          setLoading(false);
        }catch(error){
          toast.error("Something went wrong");
          setLoading(false);
        }
      }
  return (
    <>
    <Navbar />
    <div className='overflow-x-hidden'>
        {loading && <Loader />}
      <div className="flex ">
    <div className=" w-full  mt-8  sm:mt-8 sm:w-[50%]">
     
        <h1 className=" ml-16 sm:mt-[1px] sm:ml-[141px] font-bold text-3xl">We are the Team <span className='ml-12 sm:ml-0  text-blue-600  hover:text-blue-800'>E-Kart</span></h1>
        <h3 className="ml-[72px] mt-4   sm:ml-[220px]  ">Please Enter Details</h3>


        {/* <form action=""> */}
         {/* Select  */}
         <div className="mb-3">
                        <select 
                         placeholder ="Select Catagory"
                        onChange={(e)=>{
                          setproduct({
                            ...product,
                            category:e.target.value
                          })
                        }}
                        className=" py-2 px-2 mt-4 ml-[35px] h-12 w-72 sm:mr-[250px] sm:mt-[20px] sm:ml-[50px] shadow appearance-none border sm:h-[50px] rounded sm:w-[80%] sm:py-2 sm:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  ">
                           <option disabled>Select Product Category</option>
                           {categoryList.map((value,index)=>{
                            return(
                                <>       
                                  {/* <option value="" disabled selected>Select your option</option> */}
                                  <option className='first-letter:uppercase' selected ={value.select} key={index} value={value.name}>{value.name}</option>
                                </>
                              
                            ) 
                          })}
                        </select>
            </div>
             {/* Input Quantity */}
        <input className=" py-2 px-2 mt-4 ml-[35px] h-12 w-72 sm:mr-[250px] sm:mt-[20px] sm:ml-[50px] shadow appearance-none border sm:h-[50px] rounded sm:w-[80%] sm:py-2 sm:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="number"  placeholder="Quantity" 
        onChange={(e)=>{
            setproduct({
              ...product,
              quantity:e.target.value
            })
          }} />
         {/* input1 */}

        <div><input className=" py-2 px-2 mt-4 ml-[35px] h-12 w-72 sm:mr-[250px] sm:mt-[20px] sm:ml-[50px] shadow appearance-none border sm:h-[50px] rounded sm:w-[80%] sm:py-2 sm:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="text"
        name='title'   placeholder="Product Title" 
        onChange={(e)=>{
            setproduct({
              ...product,
              title:e.target.value
            })
          }}/></div>
          {/* Input Two  */}
        <input className=" py-2 px-2 mt-4 ml-[35px] h-12 w-72 sm:mr-[250px] sm:mt-[20px] sm:ml-[50px] shadow appearance-none border sm:h-[50px] rounded sm:w-[80%] sm:py-2 sm:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="number"  placeholder="Product-Price" 
        onChange={(e)=>{
            setproduct({
              ...product,
              price:e.target.value
            })
          }} />
          {/* Input Three  */}
          <input className=" py-2 px-2 mt-4 ml-[35px] h-12 w-72 sm:mr-[250px] sm:mt-[20px] sm:ml-[50px] shadow appearance-none border sm:h-[50px] rounded sm:w-[80%] sm:py-2 sm:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="text"  placeholder="Product Image Url" 
           onChange={(e)=>{
            setproduct({
              ...product,
              productImageUrl:e.target.value
            })
          }}
         />
        
            {/* Description */}
            <div className='mb-3'>
              <textarea 
              value={product.description}
              onChange={(e)=>{
                setproduct({
                  ...product,
                  description:e.target.value
                })
              }}
              name="description" placeholder="product description" rows="10" className="py-2 px-2 mt-4 ml-[35px] h-32 w-72 sm:mr-[250px] sm:mt-[20px] sm:ml-[50px] shadow appearance-none border sm:h-[120px] rounded sm:w-[80%] sm:py-2 sm:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ">

              </textarea>
            </div>

        <button 
         onClick={AddProductFunction}
        className="py-2 px-2 mt-4 ml-[35px] h-12 w-72 sm:mr-[250px] sm:mt-[20px] sm:ml-[50px] shadow appearance-none border sm:h-[50px] rounded sm:w-[80%] sm:py-2 sm:px-3  focus:shadow-outline  hover:bg-blue-700 bg-blue-600 text-white font-bold leading-tight focus:outline-none focus:shadow-outline"  >Add Product</button>
        {/* </form> */}
        
       
      
    </div>
    <div className=" w-[50%] invisible sm:visible items-center justify-center ">
    <div className=' flex font-bold text-2xl mt-10'><h1 className='flex'>Hello! &nbsp; <span className=' text-blue-700'>{firstName}</span></h1></div>
        {/* <h1 className="  items-center justify-center text-center p-48 text-3xl font-bold ">We are not just a Company</h1>
        <p className="w-[70%] mt-[-150px] ml-[160px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at quasi, possimus dignissimos, iste pariatur labore rem expedita natus modi vitae. Officiis, sequi.</p> */}
         <img className='w-[80%] h-[80%] sm:ml-16 sm:mt-4'  src={logo3} alt="" />
    </div>
  </div>
    </div></>
  )
}

export default AddProductPage
