import React, { useState } from 'react'

 function HooksCounterTwo() {
    const initailvalue=0;
    const[count,setcount]=useState(initailvalue);
    
  const incrimentHandler=()=>{
    for(let i=0;i<5;i++){
        // setcount(count+1);

        setcount(privcount =>privcount+1)
    }
    }
  return (
    <div>
       count :{count}

       <button onClick={()=> setcount(initailvalue)}>Reset</button>
       <button onClick={()=> setcount(count+1)}>incriment</button>
       <button onClick={()=> setcount(count -1)}>Decrimernt</button>

       <button onClick={incrimentHandler}> Incriment 5</button>
    </div>
  )
}
export default HooksCounterTwo