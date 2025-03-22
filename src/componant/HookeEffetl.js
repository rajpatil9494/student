import React,{useState,useEffect} from 'react'

 function HookeEffetl() {
    const[count,setcount]=useState(0);
    const[name,setname]=useState('');

    useEffect(()=>{
          console.log('Use Effect -document title updates');
          document.title=`you clicked ${count} times`
    },[])


  return (
    <div>
      <input type="text" name={name} onChange={e=>setname(e.target.value)}></input>
      <button onClick={()=>setcount(count+1)}> count{count} click</button>
    </div>
  )
}

export default HookeEffetl