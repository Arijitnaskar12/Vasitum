import React from 'react'

const RecBar = ({item,flag,announcement}) => {
  return (
    <div className={announcement?"rectangleBarAnnoun":'rectangleBar'}>
        <div className='text'>
            <p className=''>{item.title}</p>
            <p className='menWomen'>{item.time}</p>
        </div>
        <div className='icon'>
        {
            flag&&
            <img src="../src/assets/pin.png" alt="" />
        }
            <img src="../src/assets/menu.png" alt="" />
        </div>
    </div>
  )
}

export default RecBar;