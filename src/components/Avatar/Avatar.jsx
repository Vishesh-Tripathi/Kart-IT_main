import React, { useEffect, useState } from 'react'
import service from '../../appwrite/config';
import conf from '../../conf/conf';
import { account, database, storage } from '../../appwrite/Confgi';
import Button from '../Shared/Button';
import { Query } from 'appwrite';
import UserDashboard from '../../pages/user/UserDashboard';
import Navbar from '../navbar/Navbar';

function Avatar() {
    const [pic,setPic] = useState()
    const [avatarId,setAvatarId] = useState("");
    const [id,setId] = useState("");
    const [Email,SetEmail] = useState("");
    // console.log(pic)

   const seq = async() =>{
          await getAccount();
          await getImage();
          await getPreview();
   }
   
   
   const getAccount = async() =>{
      
    try {
      var t = await account.get();
      // console.log("email is",t.email);
      SetEmail(t.email)
    } catch (error) {
     console.log(error)
    }
 }

    const HandleSubmit = async(e) =>{
        e.preventDefault();
               if(pic!=null){
                 var x =  await storage.createFile(conf.appwritebucketid,"unique()",pic);
                 var zx = await account.get();
                  console.log("image uploded ->true",zx.email)
                 setId(x.$id)
                 SetEmail(zx.email)
                 console.log(x);
                 if(id != null){

                   var b =  await database.createDocument(conf.appwriteDBid,conf.appwritecollectionid2,"unique()",{
                    Id:x.$id,
                    email:zx.email,
                   })
                   console.log("Image id uploaded to database",b);
                 }
               }

              
    };
    // const x = JSON.parse(localStorage.getItem('user'));
    // console.log(x.email)
         
          



    const getImage = async() =>{
      console.log(Email)
      try {
       var t = await database.listDocuments(conf.appwriteDBid,conf.appwritecollectionid2,[
         Query.equal('email',Email)
       ])
       setAvatarId(t.documents[0].Id)
       console.log("docId is ")
       console.log(t.documents[0].Id)
        localStorage.setItem("ids",t.documents[0].Id)

      } catch (error) {
       console.log(error)
      }
   }


   const getPreview = async() =>{
     var newId = localStorage.getItem("ids")
    console.log("id is",newId)
    try {
     var t = await storage.getFileView(conf.appwritebucketid,newId);
     console.log("img ka link->",t.href)
      localStorage.setItem("ImageURL",t.href);
    } catch (error) {
     console.log(error)
    }
 }




     const deletes = async()=>{
      try {
       var  p = await storage.deleteFile(conf.appwritebucketid,id);
       console.log(p)
      } catch (error) {
        console.log(error)
      }
     }


      seq();
  return (
    <div>
      <form onSubmit={HandleSubmit} action="
      " >
        <input  className='mt-4 ml-4 rounded-sm' type="file" name='file' required onChange={(e)=>setPic(e.target.files[0])} />
        <button type='submit'>Upload</button>
        { id ?
        <> 
        <br />
        <button  onClick={deletes} className='bg-gray-700 text-white'>Delete</button>
        
        
        </>: <></>
}
               {/* <button type='submit'  className='bg-gray-600 text-white' onClick={getImage}>getId</button> */}
               {/* <button type='submit' className='bg-gray-600 text-white' onClick={getPreview}>getPreview</button> */}
      </form>
      
    </div>
  )
}

export default Avatar
