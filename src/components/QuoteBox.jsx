import React from 'react'
import BtnQuote from './BtnQuote'

const QuoteBox = ({randomQuote, randomColor, getRandomAll}) => {

    console.log(randomColor)

    const colorObj = {
        color: randomColor
    }

    const backgroundColor = {
        backgroundColor: randomColor
    }

  return (
    <article style={colorObj} className='card'>
        <p className='card_quote'>{randomQuote.quote}</p>
        <h1 className='card_author'>{randomQuote.author}</h1>
        <BtnQuote 
          backgroundColor={backgroundColor}
          getRandomAll={getRandomAll}
        />
    </article>
  )
}

export default QuoteBox