import React from 'react'
import Navbar from './Components/Layout/Navbar'
import NavbarSelecter from './Components/Layout/NavbarSelecter'
import NavbarBottom from './Components/Layout/NavbarBottom'
import CartProvider from './Components/Shared/CartContext';
import CartPanel from './Components/Shared/CartPanel';
import ProductCard from './Components/Shared/ProductCard';
import Footer from './Components/Layout/Footer';
import ScrollToTopButton from './Components/Widgets/ScrollToTopButton';
import HeroRight from './Components/Widgets/HeroRight';
import Sidebar from './Components/Layout/Sidebar';

function  App() {
const CardPro = [
  {
    id: 1,
    name: "Bakers 7 Years Old 75cl",
    price: 48.74,
    image: "https://www.onlinecava.com/wp-content/uploads/2020/05/bakers-7-years-old-75cl.jpg",
    stock: true
  },
  {
    id: 2,
    name: "Belvedere Vodka 70cl",
    price: 36.99,
    image: "https://www.onlinecava.com/wp-content/uploads/2020/05/basil-haydens-70cl.jpg",
    stock: true
  },
  {
    id: 3,
    name: "Blantons Original 70cl",
    price: 159.66,
    image: "https://www.onlinecava.com/wp-content/uploads/2020/05/W1304.jpg",
    stock: true
  },
  {
    id: 4,
    name: "Buffalo Trace Bourbon",
    price: 27.99,
    image: "https://www.onlinecava.com/wp-content/uploads/2023/01/W1949-313x400.jpg",
    stock: false
  },
  {
    id: 5,
    name: "Chivas Regal 12 Year",
    price: 41.50,
    image: "https://www.onlinecava.com/wp-content/uploads/2020/05/bookers-true-barrel-bourbon-batch-2019-01e-70cl-313x400.jpg",
    stock: true
  },
  {
    id: 6,
    name: "Glenfiddich 15 Year",
    price: 62.00,
    image: "https://www.onlinecava.com/wp-content/uploads/2023/01/W1948-313x400.jpg",
    stock: true
  },
  {
    id: 7,
    name: "Glenlivet Founders Reserve",
    price: 39.99,
    image: "https://www.onlinecava.com/wp-content/uploads/2020/05/bulleit-bourbon-100cl.jpg",
    stock: true
  },
  {
    id: 8,
    name: "Jack Daniels Old No.7",
    price: 33.99,
    image: "https://www.onlinecava.com/wp-content/uploads/2020/05/bulleit-rye-100cl-313x400.jpg",
    stock: true
  },
  {
    id: 9,
    name: "Jameson Irish Whiskey",
    price: 28.99,
    image: "https://www.onlinecava.com/wp-content/uploads/2025/07/W2229-313x400.jpg",
    stock: true
  },
  {
    id: 10,
    name: "Johnnie Walker Black Label",
    price: 44.99,
    image: "https://www.onlinecava.com/wp-content/uploads/2021/02/W1710-313x400.jpg",
    stock: false
  },
  {
    id: 11,
    name: "Johnnie Walker Gold Label",
    price: 79.99,
    image: "https://www.onlinecava.com/wp-content/uploads/2021/02/W1710-313x400.jpg",
    stock: true
  },
  {
    id: 12,
    name: "Macallan 12 Year Double Cask",
    price: 95.00,
    image: "https://www.onlinecava.com/wp-content/uploads/2021/02/W1710-313x400.jpg",
    stock: true
  }, {
    id: 1,
    name: "Bakers 7 Years Old 75cl",
    price: 48.74,
    image: "https://www.onlinecava.com/wp-content/uploads/2020/05/bakers-7-years-old-75cl.jpg",
    stock: true
  },
  {
    id: 2,
    name: "Belvedere Vodka 70cl",
    price: 36.99,
    image: "https://www.onlinecava.com/wp-content/uploads/2020/05/basil-haydens-70cl.jpg",
    stock: true
  },
  {
    id: 3,
    name: "Blantons Original 70cl",
    price: 159.66,
    image: "https://www.onlinecava.com/wp-content/uploads/2020/05/W1304.jpg",
    stock: true
  },
  {
    id: 4,
    name: "Buffalo Trace Bourbon",
    price: 27.99,
    image: "https://www.onlinecava.com/wp-content/uploads/2023/01/W1949-313x400.jpg",
    stock: false
  },
  {
    id: 5,
    name: "Chivas Regal 12 Year",
    price: 41.50,
    image: "https://www.onlinecava.com/wp-content/uploads/2020/05/bookers-true-barrel-bourbon-batch-2019-01e-70cl-313x400.jpg",
    stock: true
  },
  {
    id: 6,
    name: "Glenfiddich 15 Year",
    price: 62.00,
    image: "https://www.onlinecava.com/wp-content/uploads/2023/01/W1948-313x400.jpg",
    stock: true
  },
  {
    id: 7,
    name: "Glenlivet Founders Reserve",
    price: 39.99,
    image: "https://www.onlinecava.com/wp-content/uploads/2020/05/bulleit-bourbon-100cl.jpg",
    stock: true
  },
  {
    id: 8,
    name: "Jack Daniels Old No.7",
    price: 33.99,
    image: "https://www.onlinecava.com/wp-content/uploads/2020/05/bulleit-rye-100cl-313x400.jpg",
    stock: true
  },
  {
    id: 9,
    name: "Jameson Irish Whiskey",
    price: 28.99,
    image: "https://www.onlinecava.com/wp-content/uploads/2025/07/W2229-313x400.jpg",
    stock: true
  },
  {
    id: 10,
    name: "Johnnie Walker Black Label",
    price: 44.99,
    image: "https://www.onlinecava.com/wp-content/uploads/2021/02/W1710-313x400.jpg",
    stock: false
  },
  {
    id: 11,
    name: "Johnnie Walker Gold Label",
    price: 79.99,
    image: "https://www.onlinecava.com/wp-content/uploads/2021/02/W1710-313x400.jpg",
    stock: true
  },
  {
    id: 12,
    name: "Macallan 12 Year Double Cask",
    price: 95.00,
    image: "https://www.onlinecava.com/wp-content/uploads/2021/02/W1710-313x400.jpg",
    stock: true
  }
];

  return (
    <div className=' bg-white overflow-hidden   ' ><Navbar/><NavbarSelecter/><NavbarBottom/>
      <div className="flex xl:gap-10">
        <div className=" hidden   md:hidden lg:inline xl:w-[30%]  w-[80%]">
        <Sidebar/>
          <HeroRight/></div>
        <div className="">
          
          <CartProvider>
      <div className="flex  mt-5">
        <div className="flex-1  lg:gap-2 flex  justify-center  md:gap-1 
flex-wrap">
          {CardPro.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        <CartPanel />
      </div>
    </CartProvider>
        </div>

      </div>
      <Footer/>
        
       <div className=""> {/* lamba content scroll ke liye */}
     
      <ScrollToTopButton />
    </div>
    </div>
    
  )
}

export default  App