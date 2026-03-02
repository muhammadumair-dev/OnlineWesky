import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import botBack from "../../assets/NavBot.png";
import SelectBar from '../Widgets/SelectBar';

function NavbarBottom() {
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);

  // human-readable names for known routes
  const nameMap = {
    about: 'About Us',
    contact: 'Contact',
    faqs: 'FAQs',
    'new-in': 'New In',
    'gift-ideas': 'Gift Ideas',
    'special-packages': 'Special Packages',
    'wine-&-champagne': 'Wine & Champagne',
  };

  // build default crumbs/title from path segments
  let crumbs = ['Home', ...segments.map(seg => nameMap[seg] || seg.replace(/-/g,' '))];
  let title = crumbs.length > 0 ? crumbs[crumbs.length - 1] : 'Home';

  // special overrides for specific full paths
  const overrides = {
    '/': {
      title: 'American Whiskey',
      crumbs: ['Home', 'Whisky', 'American Whiskey'],
    },
  };

  if (overrides[location.pathname]) {
    title = overrides[location.pathname].title;
    crumbs = overrides[location.pathname].crumbs;
  }

  return (
    <div
      className="bg-cover py-[60px] w-full flex-col justify-center items-center h-fit text-white"
      style={{ backgroundImage: `url(${botBack})` }}
    >
      <div className="flex-col items-center h-[80%]">
        <h1 className="text-2xl font-medium text-center capitalize">{title}</h1>
        <div className="justify-center flex gap-1.5 py-3 font-medium">
          {crumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <span>/</span>}
              {idx < crumbs.length - 1 ? (
                <Link to={idx === 0 ? '/' : '/' + segments.slice(0, idx).join('/')}>{crumb}</Link>
              ) : (
                <span className="capitalize">{crumb}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <SelectBar />
      </div>
    </div>
  );
}

export default NavbarBottom