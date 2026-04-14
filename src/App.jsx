import React from "react";
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
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Faqs from './Components/Pages/Faqs';
import Services from './Components/Pages/Services';
import HoustonRepairs from './Components/Pages/HoustonRepairs';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import CartPage from './Components/Pages/CartPage';
import CategoryPage from './Components/Pages/CategoryPage';

function App() {
  const CardPro = [
    { id: 1, name: "Bakers 7 Years Old 75cl", price: 48.74, image: "https://www.onlinecava.com/wp-content/uploads/2020/05/bakers-7-years-old-75cl.jpg", stock: true },
    { id: 2, name: "Belvedere Vodka 70cl", price: 36.99, image: "https://www.onlinecava.com/wp-content/uploads/2020/05/basil-haydens-70cl.jpg", stock: true },
    { id: 3, name: "Blantons Original 70cl", price: 159.66, image: "https://www.onlinecava.com/wp-content/uploads/2020/05/W1304.jpg", stock: true },
    { id: 4, name: "Buffalo Trace Bourbon", price: 27.99, image: "https://www.onlinecava.com/wp-content/uploads/2023/01/W1949-313x400.jpg", stock: false },
    { id: 5, name: "Chivas Regal 12 Year", price: 41.5, image: "https://www.onlinecava.com/wp-content/uploads/2020/05/bookers-true-barrel-bourbon-batch-2019-01e-70cl-313x400.jpg", stock: true },
    { id: 6, name: "Glenfiddich 15 Year", price: 62.0, image: "https://www.onlinecava.com/wp-content/uploads/2023/01/W1948-313x400.jpg", stock: true },
    { id: 7, name: "Glenlivet Founders Reserve", price: 39.99, image: "https://www.onlinecava.com/wp-content/uploads/2020/05/bulleit-bourbon-100cl.jpg", stock: true },
    { id: 8, name: "Jack Daniels Old No.7", price: 33.99, image: "https://www.onlinecava.com/wp-content/uploads/2020/05/bulleit-rye-100cl-313x400.jpg", stock: true },
    { id: 9, name: "Jameson Irish Whiskey", price: 28.99, image: "https://www.onlinecava.com/wp-content/uploads/2025/07/W2229-313x400.jpg", stock: true },
    { id: 10, name: "Johnnie Walker Black Label", price: 44.99, image: "https://www.onlinecava.com/wp-content/uploads/2021/02/W1710-313x400.jpg", stock: false },
    { id: 11, name: "Johnnie Walker Gold Label", price: 79.99, image: "https://www.onlinecava.com/wp-content/uploads/2021/02/W1710-313x400.jpg", stock: true },
    { id: 12, name: "Macallan 12 Year Double Cask", price: 95.0, image: "https://www.onlinecava.com/wp-content/uploads/2021/02/W1710-313x400.jpg", stock: true }
  ];

  const RootLayout = () => (
    <div className="overflow-hidden">
      <Navbar />
      <NavbarSelecter />
      {/* hide bottom banner on about/contact/faqs/services */}
      {!["/about","/contact","/faqs","/services"].includes(useLocation().pathname) && <NavbarBottom />}
      <Outlet />
      <Footer />
      <div className=""> <ScrollToTopButton /> </div>
    </div>
  );

  const Home = () => (
    <div>
      <div className="flex ">
        <div className="pl-2 hidden xl:inline">
          <Sidebar />
          <HeroRight />
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {CardPro.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
      {/* Houston Easy Repairs Section */}
      <HoustonRepairs />
    </div>
  );

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
          { path: 'about', element: <About /> },
          { path: 'contact', element: <Contact /> },
          { path: 'faqs', element: <Faqs /> },
          { path: 'services', element: <Services /> },
          { path: 'cart', element: <CartPage /> },
          { path: ':category', element: <CategoryPage /> },
      ],
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
      <CartPanel />
    </CartProvider>
  );
}

export default App;
