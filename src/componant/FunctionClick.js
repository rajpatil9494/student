import React from 'react'

export default function FunctionClick() {
function EventHandler(){
   console.log('Event click..');
}

  return (
    <div>
      <button onClick={()=>EventHandler()}>Click</button>
    </div>
  )
}
