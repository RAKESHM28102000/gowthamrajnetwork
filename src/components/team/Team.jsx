import React from 'react'
import './Team.scss';
const Team = () => {
  const buttons=['Design','Content','Finance','Human Resource','Projects','Web development','Design','Content','Finance','Human Resource','Projects','Web development']
  return (
    <div className='team'>
      <div className='team-sub'>
        <p className='team-title'>TEAM GR NETWORK</p>
        <div className='img-container'><img  className='team-image' src='./images/LOGO .png' alt='team'></img></div>
        <div className='buttons-parent'>{
          buttons.map((item,index)=>{
            return(
              <button key={index} className='button-in-team'>{item}</button>
            )
          })
        }</div>

      </div>
    </div>
  )
}

export default Team;