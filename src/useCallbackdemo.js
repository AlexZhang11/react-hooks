import React, { useState, useCallback } from 'react'

export default ()=>{
    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(0)

    return (
        <>
        <p>{`you clicked ${count} times`}</p>
        <button onClick={useCallback(()=>{
            setCount(count+1)
        },[count])}>click me</button>
        <p>{`you clicked ${count1} times`}</p>
        <button onClick={useCallback(()=>{
            setCount1(count1+1)
        },[])}>click me</button>
        </>
    )
}