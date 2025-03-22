import React,{useState} from 'react'

function HookcouterFour() {

    const[items,setitems]=useState([])

   const Additem=()=>{
      setitems([...items,{
        id:items.lenght,
        value: Math.floor(Math.random() *10)+1

      }])
    }
  return (
    
    <div>
        <button onClick={Additem}>Add Number</button>
        <ul>
            {
                items.map(item =>(<li key={item.id}>{item.value}</li>))
            }
        </ul>
    </div>
  )
}
export default  HookcouterFour