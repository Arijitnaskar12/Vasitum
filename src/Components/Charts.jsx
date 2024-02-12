import React from 'react'
import StickerCommon from './StickerCommon';

const Charts = () => {
    const charts=[{title:"Total Employees",count:"216",men:120,women:96,image:"chart1.png"},{title:"Talent Request",count:"16",men:6,women:10,image:"chart2.png"}]
  return (
    <div className='charts'>
    {
    charts.map((item,i)=>(
        <StickerCommon key={i} item={item}/>
    ))
    }
    </div>
  )
}

export default Charts;