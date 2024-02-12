import React from 'react'
import RecBar from './RecBar';

const Commonbox = ({item,flag,announcement}) => {
  const tempArray=announcement?[{title:"Outing schedule for every departement",time:"5 minutes ago"},{title:"Meeting HR Department",time:"Yesterday - 10.30 AM"},{title:"IT Department need two more talents for UX/UI Designer position",time:"Today - 09.30 AM"}]:[{title:"Review candidate applications",time:"Today - 11.30 AM"},{title:"Interview with candidates",time:"Today - 10.30 AM"},{title:"Short meeting with product designer from IT Departement",time:"Today - 09.30 AM"}]
  return (
    <div className={announcement?"announcement":"upcomingSchdule"}>
    <div className={announcement?"tagUpperAnnoun":"tagUpper"}>
    <p className='Stickertitle'>{item.title}</p>
    <div className='dateTime'>
      <p className='menWomen'>Today, 13 Sep 2021</p>
      <img src="../src/assets/vector1.png" alt="" srcset="" />
    </div>
    {
      flag&&
    <p className='priority'>Priority</p>
    }
    </div>
        <div className={announcement?"rectangularboxsAnnoun":'rectangularboxs'}>
    {
      tempArray.map((item,i)=>(
        <RecBar key={i} item={item} flag={announcement?true:false} announcement={announcement?true:false}/>
      ))
    }
    </div>
    <div className={announcement?"designAnnoun":"design"}>
    <p className={announcement?"designTextAnnoun":"designText"}>{item.design}</p>
    </div>
    </div>
  )
}

export default Commonbox;