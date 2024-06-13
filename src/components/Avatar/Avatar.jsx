import React, { useState } from 'react'
import service from '../../appwrite/config';

function Avatar() {
    const [pic,setPic] = useState({
      picture: "",
    });
    console.log(pic)
    const HandleSubmit = async(e) =>{
        e.preventDefault();
               if(pic!=null){
                var x = service.getImage(pic);
                console.log(x);
               }
    };
  return (
    <div>
      <form onSubmit={HandleSubmit} action="
      " >
        <input type="file" name='file' required onChange={(e)=>setPic(e.target.files[0])} />
        <button type='submit'>Upload</button>
      </form>
    </div>
  )
}

export default Avatar
