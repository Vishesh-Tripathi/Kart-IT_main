import { useDispatch, useSelector } from "react-redux";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useNavigate } from "react-router-dom";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { useEffect,useState } from "react";
import Image1 from "../../assets/assets/category/vr.png"
// import Image1 from "../../assets/assets/category/vr.png";
// import Image2 from "../../assets/assets/category/headphone.png";
import Image2 from "../../assets/assets/category/macbook.png";
import Image3 from "../../assets/assets/category/watch.png";
import Image4 from "../../assets/assets/category/speaker1.png";
import Image5 from "../../assets/assets/hero/headphone.png";
import Image6 from "../../assets/assets/category/gaming.png";
import Slider from "react-slick";

// productData 
const productData1 = [
    {
        id: 1,
        image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg',
        title: 'Kaushalam kalash Copper Pot',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 130,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
 
]
const productData2 = [
    {
        id: 1,
        image: Image5,
        title: 'Best Selling wireless Headphones',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 950,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: Image2,
        title: 'Gaming Laptops',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120000,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    
    {
        id: 3,
        image: Image3,
        title: 'Firebolt Andriod watch',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 1200,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: Image4,
        title: 'Logitech 5.1 Soundbar',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 30000,
        trendingProductName: 'Featured',
        quantity: 1,
    },
 
]

const HomePageProductCard = () => {
    const[checkLogin,setCheckLogin] = useState(false);
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
        rows:1,
      
       };
       const user=JSON.parse(localStorage.getItem('user'));
       useEffect(()=>{
        if(user == null){
          setCheckLogin(false)
        }else{
          setCheckLogin(true)
        }
        // console.log(user.labels)
      },[user])
    const navigate=useNavigate();

    const cartitems = useSelector((state)=> state.cart);
    const dispatch = useDispatch();

    const invalid = (item) =>{
        toast.error("Please Login");
    }

    const addcart = (item)=>{
        dispatch(addToCart(item));
        toast.success("Add to cart");
    }
    const deleteCart =(item)=>{
        dispatch(deleteFromCart(item));
        toast.success("Delete Cart")
    }

    useEffect(()=>{
     localStorage.setItem('cart',JSON.stringify(cartitems));
    },[cartitems])

    
    return (
        <>
        {checkLogin === true ? (<div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {productData1.map((item, index) => {
                            const { image, title, price } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img
                                                onClick={()=>navigate('/productInfo')}
                                                className="lg:h-80  h-96 w-full"
                                                src={image}
                                                alt="blog"
                                            />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                E-bharat
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div className="flex justify-center ">
                                            {cartitems.some((p)=>p.id === item.id)
                                              ?
                                              <button onClick={()=>deleteCart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                             Delete From Cart
                                          </button>
                                          :
                                          <button onClick={()=>addcart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                          Add To Cart
                                      </button>
                                              }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <h1 className=" ml-[650px] font-bold text-2xl">Best Of Electronics</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {productData2.map((item, index) => {
                            const { image, title, price } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img
                                                onClick={()=>navigate('/productInfo')}
                                                className="lg:h-80  h-96 w-full"
                                                src={image}
                                                alt="blog"
                                            />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                E-bharat
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div className="flex justify-center ">
                                            {cartitems.some((p)=>p.id === item.id)
                                              ?
                                              <button onClick={()=>deleteCart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                             Delete From Cart
                                          </button>
                                          :
                                          <button onClick={()=>addcart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                          Add To Cart
                                      </button>
                                              }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>):(
            <div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {productData1.map((item, index) => {
                            const { image, title, price } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img
                                                onClick={()=>navigate('/productInfo')}
                                                className="lg:h-80  h-96 w-full"
                                                src={image}
                                                alt="blog"
                                            />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                E-bharat
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div onClick={()=>invalid(item)} className="flex justify-center ">
                                                <button  className=" bg-blue-500 hover:bg-blue-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Grab Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <h1 className=" ml-[650px] font-bold text-2xl">Best Of Electronics</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {productData2.map((item, index) => {
                            const { image, title, price } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img
                                                onClick={()=>navigate('/productInfo')}
                                                className="lg:h-80  h-96 w-full"
                                                src={image}
                                                alt="blog"
                                            />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                E-bharat
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div onClick={()=>invalid(item)}  className="flex justify-center ">
                                                <button   className=" bg-blue-500 hover:bg-blue-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Grab Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
        )}
        
        </>
        
    );
}

export default HomePageProductCard;