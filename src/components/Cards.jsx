import React from 'react'

const Cards = () => {
 const cards = [
  {
    title: "Card 1",
    description:"djskhfsdkhfkhefsdihrefnkjdshfuidsksiufhsdifhsd",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWIE9vIClxqAVC5K57z1YbkiHetnaGkdclMg&s",
  },
  {
    title: "Card 2",
    description:"djskhfsdkhfkhefsdihrefnkjdshfuidsksiufhsdifhsddfjjdsiuyefuhsuhfdsjgut6ew",
    img: "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/14632/production/_111860538_gettyimages-1129310243.jpg",
  },
  {
    title: "Card 3",
    description:"djskhfsdkhfkhefsdihrefnkjdshfuidsksiuf",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXzH-KGluc5w-r_ErW4EnftgwcXB_9meGgw&s",
  },
  {
    title: "Card 4",
    description:"djs khfsdkhf khefsdihref nkjdshfu idsksiu fhsdif hsddji fuhkjhf uiyfhui ytrrjfz dhiuy chsd",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzm2gUorimwhG8SPgjS8Wzcy2ZyhIuz0_juQ&s",
  },
  {
    title: "Card 5",
    description:"djsk hfsdkhfk hefsdihrefnkj dshfuidsks iufhs difhsd  nudhuidsfhhuh udyf7sf uyeh iue ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKNVdGCBd2nvchQVYHK_WdUsJdNKqXBBTynw&s",
  },
  {
    title: "Card 6",
    description:"djskhfsdkhfkhefsdihrefnkjdshfuidsksiufhsd",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSVEgwSSnatufszHrPw6SC9RCIyA6mge23lg&s",
  },
  {
    title: "Card 7",
    description:"djskhfsdkhfkhe fsdih refnkjdshf uidsksiuf hsdifhsdji ifji dfhuif",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSsbJmsvZLCmfMg9ySMr0xsXSZ-0DMuhDtJw&s",
  },
  {
    title: "Card 8",
    description:"dj skhfsd khfkhefsdihr efnkjdshfuids ksiufhsdifh sddhdsiu hiedsfyhus fguydguys fgsuyfg uysdg uysdg fuyds g   fusdfg usdfgudysgf dsfsdsd sddfsd",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJQYeipHrBIJ31lUl8T5tKjyuRFszCU7c7A&s",
  },
  {
    title: "Card 9",
    description:"djsk hfsdkhfkh efsdihre fnkjds hfuidsksiuf h sdifhs dfhshfu isdfhsdfusfhs idufhsdeiufh wuef usifhd",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXhtdddYGmdbTHZ4YsmOp8lw2pS46M51sDw&s",
  },

];
  const directions = ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'zoom-out']; 
  return (
    <>
    <p className='sm:mt-30 mt-20 p-6 text-lg font-bold sm:text-3xl'>Explore In <span className='text-green-600'>NiE</span> ZOO</p>
  <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-6 min-h-screen overflow-hidden" >
    
     {cards.map((card, index) => (
        <div
          key={index}
          className="break-inside-avoid mb-4 bg-white rounded-lg  overflow-hidden"
        data-aos={directions[index % directions.length]} // 👈 dynamic direction
      data-aos-offset="100"
      data-aos-delay={`${index * 50}`} // 👈 slightly staggered delay
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
       
       >
          <img src={card.img} alt={card.title} className="w-full" />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-md text-gray-600 p-2 ">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Cards
