import React from 'react'
import './WhyChooseUs.scss'
export const WhyChooseUs = (props) => {
  return (
    <div className='reason-card'>
        <img src={props.image} alt="" />
        <h3 className="title">{props.title}</h3>
        <p className="text">{props.text}</p>
    </div>
  )
}
