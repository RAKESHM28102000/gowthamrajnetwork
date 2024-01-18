import './Sponser.scss';
import React from 'react'
// import SponserPageCard from './SponserPageCard';
import TeamCard from '../teamcard/TeamCard';

const SponserPage = () => {
  return (
    <div className='sponserPage-parent'>
       <div>
       <h1 className='sponser-title'>
             SPONSOR NAME
        </h1>
       </div>
       <div>
        <p className='sponser-p'>
        <span className='para-span'>Heading </span><br/>
         It was popularised in the 1960s with the release of Letraset sheets containing passages, and more recently with desktop publishing software like Aldus PageMaker 
         ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
        </p>
       </div>
       <div className='sponser-page-card-parent fantasy-background'>
       {/* <SponserPageCard/> */}
       {/* <SponserPageCard/> */}
       {/* <SponserPageCard/> */}
       {/* <SponserPageCard/> */}
       <TeamCard imgSrc='./images/4.jpg'/>
       <TeamCard  imgSrc='./images/3.jpg'/>
       <TeamCard imgSrc='./images/2.jpg'/>
       <TeamCard  imgSrc='./images/1.jpg'/>
       </div>
       </div>
       )
}

export default SponserPage;