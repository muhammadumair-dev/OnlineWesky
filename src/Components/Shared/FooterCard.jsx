import React from 'react'

function FooterCard() {
  const FooterCard = [
      {
      id: 5,
      name: "Moet Chandon Imperial Brut 75cl",
      price: "€45.38",
      image: "https://www.onlinecava.com/wp-content/uploads/2026/01/W2258-150x150.jpg"
    },
    {
      id: 5,
      name: "Moet Chandon Imperial Brut 75cl",
      price: "€45.38",
      image: "https://www.onlinecava.com/wp-content/uploads/2026/01/W2258-150x150.jpg"
    },
   {
      id: 5,
      name: "Moet Chandon Imperial Brut 75cl",
      price: "€45.38",
      image: "https://www.onlinecava.com/wp-content/uploads/2026/01/W2258-150x150.jpg"
    },
     {
      id: 5,
      name: "Moet Chandon Imperial Brut 75cl",
      price: "€45.38",
      image: "https://www.onlinecava.com/wp-content/uploads/2026/01/W2258-150x150.jpg"
    },
    {
      id: 5,
      name: "Moet Chandon Imperial Brut 75cl",
      price: "€45.38",
      image: "https://www.onlinecava.com/wp-content/uploads/2026/01/W2258-150x150.jpg"
    }
  ];

  return (
    <div className=" inline md:block xl:flex  md:h-fit   flex-wrap  line w-screen px-3 items-center my-[26px] p-[25px]  h-[250px]">
     
      {FooterCard.map((item) => (
        
        <div
          key={item.id}
          className="w-[100%] wid  pt-3.5 xl:w-1/3    md:w-[100%] md:pt-[20px] flex gap-5 "
        >
          <div className="w-[70px]  object-cover">
            <img className="w-[100%] h-[100%]" src={item.image} alt="" />
          </div>

          <div className="">
            <p className="leading-6">{item.name}</p>
            <span>{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FooterCard
