import React from 'react'

function Frightbtn({ style }) {
    const tags = [
  { id: 1, name: "37.5% Alc. Vol." },
  { id: 2, name: "38% Alc. Vol." },
  { id: 3, name: "40% Alc. Vol." },
  { id: 4, name: "43% Alc. Vol." },
  { id: 5, name: "45% Alc. Vol." },
  { id: 6, name: "46% Alc. Vol." },

  { id: 7, name: "50cl" },
  { id: 8, name: "70cl" },
  { id: 9, name: "75cl" },
  { id: 10, name: "100cl" },

  { id: 11, name: "Absolut" },
  { id: 12, name: "Barbados Rum" },
  { id: 13, name: "Blended Irish" },
  { id: 14, name: "Blended Scotch" },
  { id: 15, name: "Chivas" },

  { id: 16, name: "Dark Rum" },
  { id: 17, name: "England" },
  { id: 18, name: "English Gin" },
  { id: 19, name: "English Vodka" },
  { id: 20, name: "Flavored Gin" },
  { id: 21, name: "Flavored Vodka" },
  { id: 22, name: "France" },

  { id: 23, name: "Glenfiddich" },
  { id: 24, name: "Glenlivet" },
  { id: 25, name: "Glenmorangie" },
  { id: 26, name: "Gold Rum" },
  { id: 27, name: "Ireland" },
  { id: 28, name: "Italy" },
  { id: 29, name: "J.J Whitley" },
  { id: 30, name: "Jack Daniels" },
  { id: 31, name: "Japan" },

  { id: 32, name: "Johnnie Walker" },
  { id: 33, name: "Kentucky" },
  { id: 34, name: "London Dry Gin" },
  { id: 35, name: "Macallan" },
  { id: 36, name: "Mexico" },
  { id: 37, name: "Plain Vodka" },
  { id: 38, name: "Russian Vodka" },
  { id: 39, name: "Scotland" },
  { id: 40, name: "Straight Bourbon" },
  { id: 41, name: "Sweden" },
  { id: 42, name: "Swedish Vodka" },
  { id: 43, name: "Tennessee" },
  { id: 44, name: "USA" },
];

  return (
   <div className="flex flex-wrap gap-1.5 ">
  {tags.map((item) => (
    <button
      key={item.id}
      className={`px-1.5 py-0.5 border border-gray-400 text-sm rounded hover:bg-[#DD9933] transition  ${style}`}    >
      {item.name}
    </button>
  ))}
</div>
  )
}

export default Frightbtn