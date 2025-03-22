import React from 'react'

 function Hero({heronames}) {

    if(heronames =="joker"){
        throw new console.error('Not a joker')
        
    }
  return (
    <div>
      {heronames}
    </div>
  )
}
export default Hero