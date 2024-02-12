import React from 'react'
import Commonbox from './Commonbox';

const Announcement = () => {
    const item={title:"Announcement",flag:false,design:"See All Announcement"}
  return (
    <div>
    <Commonbox item={item} flag={false} announcement={true}/>
    </div>
  )
}
export default Announcement;