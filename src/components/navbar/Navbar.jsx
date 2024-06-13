import { Fragment, useEffect, useState } from 'react'
import {Client,ID,Databases,Storage,Query, Avatars} from "appwrite"
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link, NavLink, Navigate} from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'
import SearchBar2 from '../searchBar/SearchBar2'
import Avatar from '../Avatar/Avatar'
import { useSelector } from 'react-redux'
import { Account } from 'appwrite'
import logo3 from "../../assets/assets/category/logo3.png"
import authservice from '../../appwrite/Auth'
import {useNavigate} from "react-router-dom"
import service from '../../appwrite/config'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'All Product', href: '/allproduct', current: false },
  // { name: 'Contact', href: '/contact', current: false },
  // { name: 'Github', href: '/github', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
//    const  client=new Client();
//  const Avatar = new Avatars(client);
//  const result = Avatar.getInitials();
//  console.log(result);
// service.getAvtar();
const  urli =localStorage.getItem('avatar');
console.log(urli);
  

 
  const navigate=useNavigate();

  const cartitems = useSelector((state) => state.cart);
  
  const[checkLogin,setCheckLogin] = useState(false);

  const user=JSON.parse(localStorage.getItem('user'));
  const url=(localStorage.getItem('avatar'));
  // console.log(url);

  useEffect(()=>{
    if(user == null){
      setCheckLogin(false)
    }else{
      setCheckLogin(true)
    }
    // console.log(user.labels)
  },[user])


  const  [label,setLabel] = useState(false);
  const  user1 =localStorage.getItem("label")
  useEffect(()=>{
    if(user1 ==  "admin"){
          setLabel(true);
    }

  },[user1])


    




  // logout function
  const logout=()=>{
    authservice.Logout();
      localStorage.clear();
      navigate('/login');
  }






      








  return (
   < >
   
   {checkLogin === true ? (
           <Disclosure as="nav" className=" bg-gray-100 sticky  top-0 ">
           {({ open }) => (
             <>
               <div className=" mx-auto  px-2 sm:px-6 lg:px-8">
                 <div className="relative flex h-16 items-center justify-between">
                   <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                     {/* Mobile menu button*/}
                     <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-700 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                       <span className="absolute -inset-0.5" />
                       <span className="sr-only">Open main menu</span>
                       {open ? (
                         <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                       ) : (
                         <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                       )}
                     </Disclosure.Button>
                   </div>
                   <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                     <div className="flex flex-shrink-0 items-center">
                     <Link to="/" className="flex items-center">
                             <img
                                 src={logo3}
                                 className="mr-40 mt-1  h-12 sm:mr-0 "
                                 alt="Logo"
                             />
                         </Link>
                         <div className="flex md:order-2">
                           <SearchBar/>
        
         
         </div>
     
                     </div>
     
     
                   
     
     
     
     
     
                     <div className="hidden sm:ml-6 sm:block sm:mt-[8px]">
                       <div className="flex space-x-4">
                         {navigation.map((item) => (
                           <a
                             key={item.name}
                             href={item.href}
                             className={classNames(
                               item.current ? 'bg-blue-600 text-white'  : 'text-black hover:bg-blue-700 hover:text-white',
                               'rounded-md px-3 py-2 text-sm font-medium'
                             )}
                             aria-current={item.current ? 'page' : undefined}
                           >
                             {item.name}
                           </a>
                         ))}
                       </div>
                     </div>
     
     
     
                   </div>
     
     
                  
     
     
     
     
     
     
     
     
                   
                   <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 gap-2 sm:pr-0">
                             {/* <Link
                                 to="/login"
                                 className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                             >
                                 Log in
                             </Link> */}
                             
                             <Link
                                 to="/cart"
                                 className=" flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                             >
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clip-rule="evenodd" />
                </svg>
                      
                             
                             <h1 className='mt-1'>({cartitems.length})</h1>
                             </Link>
                             
                     {/* <button
                       type="button"
                       className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                     >
                       <span className="absolute -inset-1.5" />
                       <span className="sr-only">View notifications</span>
                       <BellIcon className="h-6 w-6" aria-hidden="true" />
                     </button> */}
     
                     {/* Profile dropdown */}
                     <Menu as="div" className="relative ml-3">
                       <div>
                         <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                           <span className="absolute -inset-1.5" />
                           <span className="sr-only">Open user menu</span>
                           <img
                             className="h-8 w-8 rounded-full"
                            //  src={url}
                            src ="https://norrismgmt.com/wp-content/uploads/2020/05/24-248253_user-profile-default-image-png-clipart-png-download.png"
                             alt=""
                           />
                         </Menu.Button>
                       </div>
                       <Transition
                         as={Fragment}
                         enter="transition ease-out duration-100"
                         enterFrom="transform opacity-0 scale-95"
                         enterTo="transform opacity-100 scale-100"
                         leave="transition ease-in duration-75"
                         leaveFrom="transform opacity-100 scale-100"
                         leaveTo="transform opacity-0 scale-95"
                       >
                         <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                           <Menu.Item>
                             {/* {({ active }) => ( */}
                              
                              {label == true ? (
                                 <a
                                 href="/admin-dashboard"
                                 className='block  px-4 py-2 text-sm text-gray-700'
                               >
                                 Your Profile
                               </a>
                              ):(
                                 <a
                                 href="/user-dashboard"
                                 className='block  px-4 py-2 text-sm text-gray-700'
                               >
                                 Your Profile
                               </a>
                              )}
                             {/* )} */}
                           </Menu.Item>
                           <Menu.Item>
                             {({ active }) => (
                               <a
                                  onClick={logout}
                                 to={"/login"}
                                 className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                               >
                                 Sign out
                               </a>
                             )}
                           </Menu.Item>
                           <Menu.Item>
                             {({ active }) => (
                               <a
                                 href="#"
                                 className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                               >
                                 Settings
                               </a>
                             )}
                           </Menu.Item>
                           
                           
                         </Menu.Items>
                       </Transition>
                     </Menu>
                   </div>
                 </div>
               </div>
     
               <Disclosure.Panel className="sm:hidden">
                 <div className="space-y-1 px-2 pb-3 pt-2">
                 <SearchBar2/>
                   {navigation.map((item) => (
                     <Disclosure.Button
                       key={item.name}
                       as="a"
                       href={item.href}
                       className={classNames(
                         item.current ? 'bg-gray-600 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                         'block rounded-md px-3 py-2 text-base font-medium'
                       )}
                       aria-current={item.current ? 'page' : undefined}
                     >
                       {item.name}
                     </Disclosure.Button>
                   ))}
                   
                 </div>
               </Disclosure.Panel>
             </>
           )}
         </Disclosure>
   ):(<Disclosure as="nav" className="bg-gray-100 sticky top-0  z-10">
   {({ open }) => (
     <>
       <div className=" mx-auto  px-2 sm:px-6 lg:px-8">
         <div className="relative flex h-16 items-center justify-between">
           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
             {/* Mobile menu button*/}
             <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-800 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
               <span className="absolute -inset-0.5" />
               <span className="sr-only">Open main menu</span>
               {open ? (
                 <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
               ) : (
                 <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
               )}
             </Disclosure.Button>
           </div>
           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
             <div className="flex flex-shrink-0 items-center">
             <Link to="/" className="flex items-center">
                     <img
                         src={logo3}
                         className="mr-40  scale-110 hover:scale-125 duration-700 h-16 sm:mr-0 "
                         alt="Logo"
                     />
                 </Link>
                 <div className="flex md:order-2">
                   <SearchBar/>

 
 </div>

             </div>

             <div className="hidden sm:ml-12 sm:block sm:mt-[14px]">
               <div className="flex space-x-4">
                 {navigation.map((item) => (
                   <a
                     key={item.name}
                     href={item.href}
                     className={classNames(
                       item.current ? 'bg-blue-600 text-white'  : 'text-black hover:bg-blue-800 hover:text-white',
                       'rounded-md px-3 py-2 text-sm font-medium'
                     )}
                     aria-current={item.current ? 'page' : undefined}
                   >
                     {item.name}
                   </a>
                 ))}
               </div>
             </div>



           </div>


          








           
           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 gap-2 sm:pr-0">
                     <Link
                         to="/login"
                         className="text-gray-800 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                     >
                         Log in
                     </Link>
                     {/* <Link
                                 to="/cart"
                                 className=" flex text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                             >
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clip-rule="evenodd" />
                </svg>
                      
                             
                             <h1 className='mt-1'>({cartitems.length})</h1>
                             </Link> */}
           
           </div>
         </div>
       </div>

       <Disclosure.Panel className="sm:hidden">
         <div className="space-y-1 px-2 pb-3 pt-2">
         <SearchBar2/>
           {navigation.map((item) => (
             <Disclosure.Button
               key={item.name}
               as="a"
               href={item.href}
               className={classNames(
                 item.current ? 'bg-blue-600 text-white' : 'text-black hover:bg-blue-800 hover:text-white',
                 'block rounded-md px-3 py-2 text-base font-medium'
               )}
               aria-current={item.current ? 'page' : undefined}
             >
               {item.name}
             </Disclosure.Button>
           ))}
           
         </div>
       </Disclosure.Panel>
     </>
   )}
 </Disclosure>)}
   
   
   </>



    
  )
}
