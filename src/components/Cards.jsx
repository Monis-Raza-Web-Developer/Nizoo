import React from 'react'

const Cards = () => {
 const cards = [
  {
    title: "Card 1",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWIE9vIClxqAVC5K57z1YbkiHetnaGkdclMg&s",
  },
  {
    title: "Card 2",
    img: "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/14632/production/_111860538_gettyimages-1129310243.jpg",
  },
  {
    title: "Card 3",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXzH-KGluc5w-r_ErW4EnftgwcXB_9meGgw&s",
  },
  {
    title: "Card 4",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzm2gUorimwhG8SPgjS8Wzcy2ZyhIuz0_juQ&s",
  },
  {
    title: "Card 5",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKNVdGCBd2nvchQVYHK_WdUsJdNKqXBBTynw&s",
  },
  {
    title: "Card 6",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSVEgwSSnatufszHrPw6SC9RCIyA6mge23lg&s",
  },
  {
    title: "Card 7",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSsbJmsvZLCmfMg9ySMr0xsXSZ-0DMuhDtJw&s",
  },
  {
    title: "Card 8",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJQYeipHrBIJ31lUl8T5tKjyuRFszCU7c7A&s",
  },
  {
    title: "Card 9",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXhtdddYGmdbTHZ4YsmOp8lw2pS46M51sDw&s",
  },

];
  return (
    <>
    <p className='sm:mt-30 mt-20 p-6 text-lg font-bold sm:text-3xl'>Explore In <span className='text-green-600'>NiE</span> ZOO</p>
  <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-6 min-h-screen " >
    
     {cards.map((card, index) => (
        <div
          key={index}
          className="break-inside-avoid mb-4 bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-up"
    data-aos-offset="100"
    data-aos-delay="10"
    data-aos-duration="300"
    data-aos-easing="ease-in"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="left"
        >
          <img src={card.img} alt={card.title} className="w-full" />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-sm text-gray-600">
              Natural height card with image.
            </p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Cards
