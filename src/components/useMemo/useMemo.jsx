import React, { useState, useMemo } from "react";

function complexComp(num){
    console.log('fefe')//рендер когда клик SetColored делаем Usememo 
    let i=0
    while (i < 100000) i++
    return num * 2
}

export const Hooks4 = () => {
  const [count, setCount] = useState(2);
    const[colored, setColored] = useState(false)


  const computed = useMemo(()=>{
    return complexComp(count)
  },[count])// useMemo равно тому чему мы возвращаем computed = complexComp(count)

  console.log(colored)

  return (
    <div>
      <div>
        <p>hello this click{computed}</p>
        <button onClick={()=> setCount(prev => prev+1)}>+</button>
        <button onClick={()=> setCount(prev => prev-1)}>-</button>
        <button onClick={()=> setColored(prev => !prev)}>{colored ? 'true' : 'false'}</button>
      </div>
      
    </div>
  );
};
