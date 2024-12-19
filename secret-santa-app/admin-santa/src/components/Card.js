import React from 'react'
import "./style.css"

const Card = ({cardText}) => {
  return (
    <div className='card-container'>{cardText}</div>
  )
}

export default Card