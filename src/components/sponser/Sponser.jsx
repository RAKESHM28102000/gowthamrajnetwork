import React from 'react'
import "./Sponser.scss";
import SponserCard from './SponserCard';
function Sponser() {
    const sponser=[{title:"TITLE SPONSORS",quote:"1 crore",count:"3"},
    {title:"CO SPONSORS",quote:"75 LAKHS",count:"4"},
    {title:"ASSOCIATE SPONSORS",quote:"50 LAKHS",count:"6"},
    {title:"POWERED BY SPONSORS",quote:"30 LAKHS",count:"6"},
    {title:"PLATINUM SPONSOR",quote:"20 LAKHS",count:"4"},
    {title:"DIAMOND SPONSOR",
quote:"5 LAKHS TO 10 LAKHS",count:"6"},
{title:"GOLD SPONSOR",
quote:"3 TO 4 LAKHS",count:"3"},
{title:"SILVER SPONSOR",
quote:"1 LAKH",count:"4"},
]
  return (
    <div className='sponser-parent'>
    <div><h1 className='sponser-title'>
    SPONSORS
    </h1></div>
    <div className='sponser'>
      {sponser.map((item,index)=>{
        return <SponserCard key={index} sponserTitle={item.title} sponsershipQuote={item.quote} sponsersCount={item.count}/>
      })}    
    </div>
    </div>
  )
}

export default Sponser;