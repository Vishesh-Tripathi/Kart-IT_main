import { createContext, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast"
import {useNavigate} from "react-router-dom"
import authservice from "../../appwrite/Auth";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";
import logo3 from "../../assets/assets/category/logo3.png"




const Login = () => {
  
 
  const [loading,setLoading]=useState(false);
  const [UserLogin,setUserLogin]=useState({
      email:"",
      password:""
  });
  const navigate=useNavigate();
  const event=async()=>{
   
      if(UserLogin.email==""||UserLogin.password==""){
          toast.error("All the fields are required")
          return ;
      }
      
      setLoading(true);
      const data=await authservice.Login(UserLogin)
     
      console.log(data);

      if(data){
          const data2=await authservice.getCurrentUser();
          console.log(data2);
          await localStorage.setItem('user',JSON.stringify({"name":data2.name,"email":data2.email,"Role":data2.labels[0]}));
          setLoading(false);
          toast.success("Login succesfully")
          if(data2.labels[0]=="admin"){
              navigate('/admin-dashboard')
          }
          else{
               navigate('/user-dashboard');
          }
      }
      else{
          setUserLogin({
              email:"",
              password:""
          })
          setLoading(false);
          toast.error("Input current name and password");
      }
  }
  return (
   <>
   <Navbar />
    <div className='overflow-x-hidden'>
    {loading&&<Loader/>}
      <div className="flex ">
    <div className=" w-full   sm:mt-16 sm:w-[50%]">
      <div className=" ml-24 mt-8 sm:-mt-10 sm:ml-1 sm:w-[300px] w-[150px]">

        <img className="   hover:scale-125  duration-1000   sm:ml-56" src={logo3}  style={{width: '199px'}} alt="logo" />
      </div>
        <h1 className=" ml-16 sm:mt-[1px] sm:ml-[141px] font-bold text-3xl">We are the Team <span className='ml-12 sm:ml-0  text-blue-600  hover:text-blue-800'>E-Kart</span></h1>
        <h3 className="ml-[72px] mt-4   sm:ml-[220px]  ">Please Login to your account</h3>


        {/* <form action=""> */}
        <div><input className=" py-2 px-2 mt-4 ml-[35px] h-12 w-72 sm:mr-[250px] sm:mt-[20px] sm:ml-[50px] shadow appearance-none border sm:h-[50px] rounded sm:w-[80%] sm:py-2 sm:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="email"  value={UserLogin.email}
                        onChange={(e)=>setUserLogin({
                            ...UserLogin,
                            email:e.target.value
                        })} placeholder="Email address" /></div>
        <input className=" py-2 px-2 mt-4 ml-[35px] h-12 w-72 sm:mr-[250px] sm:mt-[20px] sm:ml-[50px] shadow appearance-none border sm:h-[50px] rounded sm:w-[80%] sm:py-2 sm:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="password"  value={UserLogin.password}
                        onChange={(e)=>setUserLogin({
                            ...UserLogin,
                            password:e.target.value
                        })} placeholder="Password" />
        <button className="py-2 px-2 mt-4 ml-[35px] h-12 w-72 sm:mr-[250px] sm:mt-[20px] sm:ml-[50px] shadow appearance-none border sm:h-[50px] rounded sm:w-[80%] sm:py-2 sm:px-3  focus:shadow-outline  hover:bg-blue-700 bg-blue-600 text-white font-bold leading-tight focus:outline-none focus:shadow-outline"  onClick={event}>Login</button>
        {/* </form> */}
        <div className=" mt-4 text-center sm:mt-[20px] sm:ml-[-60px]">
          <Link to="/inputbox/forgot">
          
          Forgot Password?
          </Link>

       
        </div>
        <div className=" mb-10">
        <div className="flex mt-8 ml-[-10px]  sm:mt-[20px]  sm:gap-4 sm:ml-[150px]">
        <h4 className="pl-12">Don't have an account?</h4>
        


        
             
        <Link
                            to="/signup"
                            className="bg-blue-600 mt-[-5px] text-center  hover:bg-blue-800 w-[150px] h-[40px] mb-8 text-white font-bold rounded focus:outline-none focus:shadow-outline"
                        >
                            <h3 className='mt-[6.5px] '>Create New</h3>
                        </Link>


        </div>

        </div>
      
    </div>
    <div className=" w-[50%] invisible sm:visible items-center justify-center ">
        {/* <h1 className="  items-center justify-center text-center p-48 text-3xl font-bold ">We are not just a Company</h1>
        <p className="w-[70%] mt-[-150px] ml-[160px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at quasi, possimus dignissimos, iste pariatur labore rem expedita natus modi vitae. Officiis, sequi.</p> */}
         <img className='w-[80%] h-[80%] sm:ml-16 sm:mt-24'  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="" />
    </div>
  </div>
    </div></>
  )
}

export default Login
