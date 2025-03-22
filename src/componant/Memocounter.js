import React,{useState,useMemo} from 'react'
 function Memocounter() {
    const[counterone,setcounteone]=useState(0);
    const[countertwo,setcountertwo]=useState(0);

    const incrimentone=()=>{

        setcounteone(counterone+1);
    }
    const incrmentTwo=()=>{
        setcountertwo(countertwo+1);
    }

    
      const isEven=useMemo(()=>{
        let i=0;
        while(i<2000000000) i++
        return counterone %2 ==0
      },[counterone])

 
  return (
    <>
    <div>
      <button onClick={incrimentone}>cont One ={counterone}</button>
      <span>{isEven?'Even':'Odd'}</span>
     
    </div>
    <div>
         <button onClick={incrmentTwo}>cont Two ={countertwo}</button>
    </div>
    </>
  )
}

export default Memocounter