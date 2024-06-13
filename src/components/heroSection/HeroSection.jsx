import { Subtitles } from 'lucide-react';
import React from 'react'
import Slider from "react-slick"
import Image1 from "../../assets/assets/category/vr.png"
// import Image1 from "../../assets/assets/category/vr.png";
// import Image2 from "../../assets/assets/category/headphone.png";
import Image2 from "../../assets/assets/category/macbook.png";
import Image3 from "../../assets/assets/category/watch.png";
import Image4 from "../../assets/assets/category/speaker1.png";
import Image5 from "../../assets/assets/hero/headphone.png";
import Image6 from "../../assets/assets/category/gaming.png";
import Button from '../Shared/Button';
const HeroSlide =[
  {
    id:1,
    img:Image1,
    subtitle: "Sony",
    title: "PS4",
    title2: "Playstation",
    discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
  },
  {
    id:2,
    img:Image2,
    subtitle: "zeras",
    title: "Oculs VR",
    title2: "Headset",
    discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
  },
  {
    id:3,
    img:Image3,
    subtitle: "Apple",
    title: "M3-Chip",
    title2: "Macbook",
    discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
  },
  {
    id:4,
    img:Image4,
    subtitle: "FireBolt",
    title: "Andriod",
    title2: "Smartwatch",
    discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
  },
  {
    id:5,
    img: Image5,
    subtitle: "180 Watt",
    title: "Logitech 5.1",
    title2: "SoundSystem",
    discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
  },
  {
    id:6,
    img:Image6,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
    discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
  },

]

function HeroSection() {
 const settings ={
  dots: false,
  arrows : true,
  infinite: true,
  speed: 1000,
  autoplay:true,
  // slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 4000,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: true,

 };

  return (
    <div className=' container '>
      <div className=' overflow-hidden rounded-3xl min-h-[450px] sm:min-h-[550px] flex justify-center items-center sm:w-[1457px] sm:ml-[15px] sm:mt-[20px]
       hero-bg-color
       '>
        <div className=' w-full  container  sm:pb-0 '>
        <Slider {...settings} >
        {
          HeroSlide.map((data)=>(
            <div key={data.id}>
              <div className=' grid grid-cols-1 sm:grid-cols-2  '>
                   <div className=' gap-4 flex flex-col justify-center sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                    <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold '>{data.subtitle}</h1>
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                    <h1 className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold '>{data.title2}</h1>
                    <h1 ><Button 
                    text = "Shop Now"
                    bgColor="bg-blue-300"
                    textColor="text-white"
                    />
                    </h1>
                   
                   </div>
                   <div className=' order-2  sm:ml-[250px] sm:order-1 relative '>
                    <img src={data.img} alt="" className="sm:w-[450px] h-[450px] sm:ml-[1200px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto   drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40 " />
                   </div>
              </div>

            </div>
          ))
        }
        </Slider>
        </div>
      </div>
        {/* <img className="w-full"src="https://devknus.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feeee8099-a731-4be4-b949-97588572fb6b%2Faf556a00-6601-4a15-8931-dab16ebd5981%2FUntitled.png?table=block&id=4ec2cb9b-b4a9-4de8-8195-725a3a795de5&spaceId=eeee8099-a731-4be4-b949-97588572fb6b&width=2000&userId=&cache=v2" alt="" /> */}
    </div>
  )
}

export default HeroSection