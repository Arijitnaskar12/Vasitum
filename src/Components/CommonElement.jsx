import React from 'react'

const CommonElement = ({item}) => {
  return (
    <div className='template' style={{backgroundColor:`${item.color}`}}>
        <p className='textTemplete'>{item.upper}</p>
        <p className='textTemplete mid'>{item.middle}</p>
        <p className='textTemplete bottom2' style={{color:`${item.btColor}`}}>{item.bottom}</p>
    </div>
  )
}

export default CommonElement;