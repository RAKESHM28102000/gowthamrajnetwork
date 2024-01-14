import React from 'react'
import { FaFingerprint, FaLinkedin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import './Person.scss';
function PersonContainer({name,mail}) {
  return (
    <div className='person'>
    <div className='person-child'>
    <div className='first-box'>
      <FaFingerprint />
      <div className='box-inside'>
        <h3>{name}</h3>
        <p>{mail}</p>
      </div>
    </div>
    <div className='first-box'>
  <FaFingerprint />
  <div className='box-inside'>
    <h3>name <FaLinkedin /></h3>
    <p>quote</p>
    <p><FaPhone />number</p>
  </div>
</div>
    </div>
    </div>
  )
}

export default PersonContainer