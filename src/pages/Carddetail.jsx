import React from 'react'
import { cards } from '../data/Cardsdata'
import { useParams } from 'react-router-dom';
import Miniheader from '../components/Miniheader';



const Carddetail = () => {
    const { id } = useParams();
    const card = cards.find((p) => p.id === Number(id));
  return (
    <>
    <Miniheader title={"About" + card.title  }/>
    <div className='grid md:grid-cols-2 grid-cols-1 items-center p-10 py-20'>

<div className='mx-auto h-[40vh]'  ><img src={card.img} alt="" className='h-full rounded-2xl' /></div>
<div>

    <div className='text-4xl font-bold mb-4'>{card.title}</div>
    <div>{card.description}</div>
</div>
    </div>
    
    </>
 
      
    
  )
}

export default Carddetail
