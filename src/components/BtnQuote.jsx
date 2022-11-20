import React from 'react'

const BtnQuote = ({backgroundColor, getRandomAll}) => {
  return (
    <button 
    className='card_btn'
    style={backgroundColor} 
    onClick={getRandomAll}
    >&#62;</button> 
  )
}

export default BtnQuote