import React from 'react'

const StickerCommon = ({item}) => {
  return (
    <div className='card'>
        <div className='leftCard'>
           <div className="titleCount">
           <p className='Stickertitle'>{item.title}</p>
           <p className='Stickercount'>{item.count}</p>
           </div>
           <div className='menWomen'>
           <p>{item.men} men</p>
           <p>{item.women} women</p>
           </div>
        </div>
        <div className='rightCard'>
          <div className="graphs"></div>
          <img src={`../src/assets/${item.image}`} alt="chart image" />
        </div>
     </div>
  )
}

export default StickerCommon;