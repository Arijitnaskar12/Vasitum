import React from 'react'
import CommonElement from './CommonElement'

const Sticky = () => {
    const stickyArray=[{upper:"Available Position",middle:"24",bottom:"4 Urgently needed",color:"#ffd7d3",btColor:"#ff681f"},{upper:"Job Open",middle:"10",bottom:"4 Active Hiring",color:"#daeff8",btColor:"#4c81ea"},{upper:"New Employee",middle:"24",bottom:"4 Department",color:"#fad4f7",btColor:"#e58cde"}]
  return (
    <div>
    <div className='title'><p>Dashboard</p></div>
    <div className='Sticky'>
    {stickyArray.map((item,i)=>(
        <CommonElement item={item} key={i}/>
    ))
    }
    </div>
    </div>
  )
}

export default Sticky