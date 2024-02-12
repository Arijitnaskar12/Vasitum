import React from 'react'
import Commonbox from './Commonbox'

const UpcomingSchdule = () => {
    const item={title:"Upcoming Schedule",flag:true,design:"Create a New Schedule"}
  return (
    <div>
    <Commonbox item={item} flag={true} announcement={false}/>
    </div>
  )
}

export default UpcomingSchdule