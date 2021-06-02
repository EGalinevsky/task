import React, { useEffect, useState, useRef } from 'react'



export const Hooks3 = ()=>{



    // const[renderCount, setRenderCount]= useState(1)
    const[value, setValue]= useState('')
    const renderCount = useRef(0)
    const inputRef = useRef('0')

    useEffect(()=>{
        renderCount.current++
        console.log(inputRef.current)
    })

    const focus = ()=>inputRef.current.focus()

    return(
        <div>
            <h1>количесвто  {renderCount.current}</h1>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value ={value}/>
            <button className='btn btn-success' onClick={focus}>focfefefus</button>
        </div>
    )
}