import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [inc, setInc] = useState(0);
    const increament = ()=>{
        setInc((preVal)=>preVal+1);
    }
    const decreament = ()=>{
        setInc((preVal)=>preVal>0?preVal-1:0);
    }
    const reset =()=>
        setInc(0)
  return (
    <>
    <div className='tagline'>
        The Counter App
    </div>
    <h3>The Count is  : <span>{inc}</span></h3>
    <div className="container">
    <button onClick={increament} >Increase</button>
    <button onClick={decreament} >Decrease</button>
    <button  onClick={reset}>Reset</button>

    </div>
    
    </>
  )
}

export default Counter
