import React from 'react'
import './Testimonials.scss'

export const Testimonials = (props) => {
  return (
    <div className='testimonials'>
        <img src={props.image} alt="" />
        <h3>{props.name}</h3>
        <p>{props.city}</p>
        <p>{props.text}</p>
    </div>
  )
}
