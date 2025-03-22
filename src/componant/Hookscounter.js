import React,{useState} from 'react'

 function Hookscounter() {
   const[count,setcount]= useState(0)
  return (
    <div>
        <button onClick={()=>setcount(count+1)}> count{count} click</button>
    </div>
  )
}

export default Hookscounter