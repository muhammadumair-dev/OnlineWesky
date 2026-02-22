import React from 'react';
import SidebarCategory from '../Shared/SidebarCategory';
import BrandSelect from '../Shared/BrandSelect';
import PriceSlider from '../Shared/PriceSlider';

const categories = [
  { label: 'Glassware & More', count: 8 },
  { label: 'Brandy & Cognac', count: 100, hasSub: true },
  { label: 'Gift Ideas', count: 453, hasSub: true },
  { label: 'Gin & Tonic', count: 292, hasSub: true },
  { label: 'Mixers', count: 3 },
  { label: 'Other Spirits', count: 134, hasSub: true },
  { label: 'Rum & Cachaca', count: 211 },
  { label: 'Special Packages', count: 174 },
  { label: 'Vodka', count: 234 },
  { 
    label: 'Whisky', 
    count: 1144, 
    isOpen: true,
    subItems: [
      { name: 'American Whiskey', hasSub: true, bold: true },
      { name: 'Irish Whiskey' },
      { name: 'Japanese' },
      { name: 'Other Countries' },
      { name: 'Scotch Blended' },
      { name: 'Scotch Blended Malt' },
      { name: 'Single Malt Whisky', hasSub: true }
    ]
  },
  { label: 'Wine and Champagne', count: 55, hasSub: true },
];

const Sidebar = () => {
  return (
    <aside className="w-full max-w-[260px] p-4 bg-white">
      <section className="mb-8">
        <h2 className="text-[14px] font-bold uppercase tracking-wider mb-1">Browse Categories</h2>
        <div className="w-8 h-[2px] bg-gray-200 mb-4"></div>
        <div className="flex flex-col">
          {categories.map((cat, idx) => (
            <SidebarCategory
              key={idx} 
              label={cat.label} 
              count={cat.count} 
              subItems={cat.subItems} 
              isOpenInitial={cat.isOpen}
            />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-[14px] font-bold uppercase tracking-wider mb-1">Distilleries/Brands</h2>
        <div className="w-8 h-[2px] bg-gray-200 mb-4"></div>
        <BrandSelect />
      </section>

      <section>
        <h2 className="text-[14px] font-bold uppercase tracking-wider mb-1">Filter by Price</h2>
        <div className="w-8 h-[2px] bg-gray-200 mb-2"></div>
        <PriceSlider />
      </section>
    </aside>
  );
};

export default Sidebar;