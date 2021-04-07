import React, { useEffect, useState, useRef } from 'react'



export const Hooks3 = ()=>{



    // const[renderCount, setRenderCount]= useState(1)
    const[value, setValue]= useState('')
    const renderCount = useRef(0)
    const inputRef = useRef(null)

    useEffect(()=>{
        renderCount.current++
        console.log(inputRef.current)
    })

    return(
        <div>
            <h1>количесвто  {renderCount.current}</h1>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value ={value}/>
            <button className='btn btn-success'>focus</button>
        </div>
    )
}