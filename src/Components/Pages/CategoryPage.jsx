import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../Layout/Sidebar';
import HeroRight from '../Widgets/HeroRight';
import ProductCard from '../Shared/ProductCard';

function CategoryPage() {
  const { category } = useParams();
  const title = category ? category.replace(/-/g, ' ') : 'Home';

  // base products identical to Home
  const baseProducts = [
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

  // map of category slug to override image URL(s).
  // The slug is derived from the dropdown item by lowercasing and
  // replacing spaces with hyphens. Include both the main select names
  // and any of their options if you want separate pages for them.
  // Each value may be:
  //   * a string – same image for every card
  //   * an array – different images will be assigned in order
  // Examples below illustrate using placeholder pics for each slug.
  const imageOverrides = {
    'gift-ideas': [
      'https://www.onlinecava.com/wp-content/uploads/2020/05/Aberfeldy-12-Years-Old-70cl-1-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2020/05/W10909-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/04/W2087.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1297.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/02/V1300.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1294.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1323.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1299.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1319.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1318.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1313.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1312.jpg'
    ],
    'new-in': [
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1292.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1294.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/02/V1300.jpg',
    ],
    whisky: ['https://www.onlinecava.com/wp-content/uploads/2020/05/Aberfeldy-12-Years-Old-70cl-1-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2020/05/W10909-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/04/W2087.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1297.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/02/V1300.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1294.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1323.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1299.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1319.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1318.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1313.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1312.jpg'],
    'single-malt': ['https://www.onlinecava.com/wp-content/uploads/2020/05/aberlour-12-years-old-double-cask-matured-70cl-313x400.jpg', 'https://www.onlinecava.com/wp-content/uploads/2020/05/Aberfeldy-12-Years-Old-70cl-1-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2020/05/W10909-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/04/W2087.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1297.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/02/V1300.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1294.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1323.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1299.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1319.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1318.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1313.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1312.jpg'],
    'gin-&-tonic': ' https://www.onlinecava.com/wp-content/uploads/2025/02/V1300.jpg',
    'rum-&-cachaca': ['https://www.onlinecava.com/wp-content/uploads/2020/05/Aberfeldy-12-Years-Old-70cl-1-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2020/05/W10909-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/04/W2087.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1297.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/02/V1300.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1294.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1323.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1299.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1319.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1318.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1313.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1312.jpg'],
    vodka: ['https://www.onlinecava.com/wp-content/uploads/2020/05/Aberfeldy-12-Years-Old-70cl-1-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2020/05/W10909-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/04/W2087.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1297.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/02/V1300.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1294.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1323.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1299.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1319.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1318.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1313.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1312.jpg'],
    'wine-&-champagne': ['https://www.onlinecava.com/wp-content/uploads/2020/05/Aberfeldy-12-Years-Old-70cl-1-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2020/05/W10909-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/04/W2087.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1297.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/02/V1300.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1294.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1323.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1299.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1319.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1318.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1313.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1312.jpg'],
    more: ['https://www.onlinecava.com/wp-content/uploads/2020/05/Aberfeldy-12-Years-Old-70cl-1-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2020/05/W10909-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/04/W2087.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1297.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/02/V1300.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1294.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1323.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1299.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1319.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1318.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1313.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1312.jpg'],

    // you can also override individual options if they generate their own page
    wine: ['https://www.onlinecava.com/wp-content/uploads/2020/05/Aberfeldy-12-Years-Old-70cl-1-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2020/05/W10909-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/04/W2087.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1297.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/02/V1300.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1294.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1323.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1299.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1319.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1318.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1313.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1312.jpg'],
    'special-packages': ['https://www.onlinecava.com/wp-content/uploads/2020/05/Aberfeldy-12-Years-Old-70cl-1-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2020/05/W10909-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/04/W2087.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1297.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/02/V1300.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1294.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1323.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1299.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1319.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1318.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1313.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1312.jpg'],
    'gift-card': [      'https://www.onlinecava.com/wp-content/uploads/2020/05/Aberfeldy-12-Years-Old-70cl-1-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2020/05/W10909-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/04/W2087.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1297.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/02/V1300.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1294.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1323.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1299.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1319.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1318.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1313.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1312.jpg'],
    'sparkling-wine': ['https://via.placeholder.com/150?text=Sparkling+Wine',
      'https://www.onlinecava.com/wp-content/uploads/2020/05/W10909-320x410.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/04/W2087.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1297.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/02/V1300.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1294.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1323.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2024/12/V1299.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1319.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1318.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1313.jpg',
      'https://www.onlinecava.com/wp-content/uploads/2025/03/V1312.jpg'],
    gin: 'https://via.placeholder.com/150?text=Gin',
    tonic: 'https://via.placeholder.com/150?text=Tonic',
  };

  const products = baseProducts.map((p, idx) => {
    if (category && imageOverrides[category]) {
      const override = imageOverrides[category];
      if (Array.isArray(override)) {
        return { ...p, image: override[idx % override.length] };
      }
      return { ...p, image: override };
    }
    return p;
  });

  return (
    <div>
      <div className="flex">
        <div className="pl-2">
          <Sidebar />
          <HeroRight />
        </div>
        <div className="flex flex-wrap">
          {products.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
