import React from 'react';
import './TeamCard.scss'; // Import your CSS file

const TeamCard = ({imgSrc}) => {
  return (
    // <div className='team-page-card-parent'>
    <div className='card'>
    <img src={imgSrc} alt='img' className='card-img'/>
      <div className="card-body">
          <h1 className="card-title">Name</h1>
          <p className="card-sub-title">Phone Number</p>
          <p className="card-info">Web developers often work for clients who are trying to get their product or service onto the web. The work is typically very project focused and involves collaborating with a team that helps to coordinate the client's needs into the end product. </p>
         <button className='card-btn'>button</button>
      </div>
      </div>
    // </div>
  );
};

export default TeamCard;