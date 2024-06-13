/* eslint-disable react/no-unescaped-entities */
import vishesh from "../../assets/vishesh.png"
import br1 from "../../assets/assets/brand/br-1.png"
import br2 from "../../assets/assets/brand/br-2.png"
import br3 from "../../assets/assets/brand/br-3.png"
import br4 from "../../assets/assets/brand/br-4.png"
import br5 from "../../assets/assets/brand/br-5.png"
import Slider from "react-slick"
const HeroSlide =[
    {
      id:1,
      img:"https://zeevector.com/wp-content/uploads/2021/02/Prestige-Logo-Vector.png",
      subtitle: "Sony",
      title: "PS4",
      title2: "Playstation",
      discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
    },
    {
      id:2,
      img:"https://pngimg.com/uploads/lg_logo/lg_logo_PNG15.png",
      subtitle: "zeras",
      title: "Oculs VR",
      title2: "Headset",
      discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
    },
    {
      id:3,
      img:"https://www.pngmart.com/files/12/Haier-Logo-Transparent-PNG.png",
      subtitle: "Apple",
      title: "M3-Chip",
      title2: "Macbook",
      discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
    },
    {
      id:4,
      img:"https://seapackaging.com/wp-content/uploads/2022/07/hrx-min-1.png",
      subtitle: "FireBolt",
      title: "Andriod",
      title2: "Smartwatch",
      discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
    },
    {
      id:5,
      img: "https://cdn.freelogovectors.net/wp-content/uploads/2023/09/allen-solly-logo-freelogovectors.net_.png",
      subtitle: "180 Watt",
      title: "Logitech 5.1",
      title2: "SoundSystem",
      discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
    },
    {
        id:6,
        img: "https://freepngimg.com/download/adidas/58136-logo-brand-adidas-sports-free-transparent-image-hd.png",
        subtitle: "180 Watt",
        title: "Logitech 5.1",
        title2: "SoundSystem",
        discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
      },
      {
        id:7,
        img: " https://vectorseek.com/wp-content/uploads/2023/09/boAt-Logo-Vector.svg-.png",
        subtitle: "180 Watt",
        title: "Logitech 5.1",
        title2: "SoundSystem",
        discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
      },
      {
        id:8,
        img: "https://companieslogo.com/img/orig/CAMPUS.NS_BIG-db38a91a.png?t=1684137811",
        subtitle: "180 Watt",
        title: "Logitech 5.1",
        title2: "SoundSystem",
        discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
      },
      {
        id:9,
        img: "https://logodownload.org/wp-content/uploads/2016/09/huawei-logo-1-1.png",
        subtitle: "180 Watt",
        title: "Logitech 5.1",
        title2: "SoundSystem",
        discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
      },
      {
        id:10,
        img: " https://www.freepnglogos.com/uploads/classic-samsung-logo-png-0.png",
        subtitle: "180 Watt",
        title: "Logitech 5.1",
        title2: "SoundSystem",
        discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
      },
      {
        id:11,
        img: "https://static.vecteezy.com/system/resources/previews/024/273/827/original/realme-logo-transparent-free-png.png",
        subtitle: "180 Watt",
        title: "Logitech 5.1",
        title2: "SoundSystem",
        discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
      },
      {
        id:12,
        img: "https://1000logos.net/wp-content/uploads/2021/05/JBL-logo.png",
        subtitle: "180 Watt",
        title: "Logitech 5.1",
        title2: "SoundSystem",
        discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
      },
     
    
  
  ]

const Testimonial = () => {
    const settings ={
        dots: true,
        mobileFirst:true,
        slidesPerRow:3,
        arrows : false,
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
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-blue-600'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={vishesh} />
                                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-600 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Vishesh Tripathi</h2>
                                <p className="text-gray-500">Assistant Developer</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://www.devknus.com/img/gawri.png" />
                                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-600 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">S Mishra</h2>
                                <p className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://firebasestorage.googleapis.com/v0/b/devknus-official-database.appspot.com/o/images%2FScreenshot%202023-07-07%20at%202.20.32%20PM-modified.png?alt=media&token=324ddd80-2b40-422c-9f1c-1c1fa34943fa" />
                                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-600 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">XYZ </h2>
                                <p className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
              {/* Brand Section */}
            <section className="  -mb-32">
                <h1 className=" font-bold  text-2xl ml-10   ">Our <br />
                     <span className=" text-3xl text-blue-600 "> Top</span> Brands</h1>
                     <div className=" border-2 border-t-blue-600 w-full mt-2    "></div>
                     <div className=' w-full  container  sm:pb-0 '>
        <Slider {...settings} className="  ml-4 mt-[-70px] h-[350px] sm:w-full  ">
        {
          HeroSlide.map((data)=>(
            <div key={data.id}>
              <div className=''>
                   
                   <div className='   order-2  sm:ml-[250px] sm:order-1 relative '>
                    <img src={data.img} alt="" className=" pl-8 -ml-[20px] w-[250px]  h-[450px] sm:-ml-[80px]  sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto   drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40 " />
                   </div>
              </div>

            </div>
          ))
        }
        </Slider>
        </div>
            </section>
        </div>
    )
}

export default Testimonial