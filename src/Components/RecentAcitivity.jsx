import React from 'react'

const RecentAcitivity = () => {
  return (
    <div className='recentActivity'>
    <div className='txt'>Recent Activity</div>
    <div className='middle'>
        <p className='common'>10.40 AM, Fri 10 Sept 2021</p>
        <p className='commonMiddle'>You Posted a New Job</p>
        <p className='common1'>Kindly check the requirements and terms of work and make sure everything is right.</p>
    </div>
    <div className='bottom'>
        <p>Today you makes 12 Activity</p>
        <button type='button'>See All Activity</button>
    </div>
    </div>
  )
}

export default RecentAcitivity;