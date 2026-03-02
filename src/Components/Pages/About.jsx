import React from 'react'

function About({ title = 'ABOUT US', bgImage = 'https://www.onlinecava.com/wp-content/uploads/2020/05/alcohol-drinks-whiskey-cognac-vodka-rum-teq.jpg', title2='', height = '75vh' }) {
  const style = {
    backgroundImage: `url(${bgImage})`,
    height,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="flex-col gap-y-3  flex justify-center items-center text-white" style={style}>
      <h1 className="font-semibold  text-4xl">{title}</h1>
      <h3 className="w-[180px] md:w-[450px] sm:w-[350px] text-[#f1f1f1] font-medium text-[15px] md:text-[18px] text-center">{title2}</h3>
    </div>
  )
}

export default About