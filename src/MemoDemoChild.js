import React from 'react'

const Child = ({seconds})=>{
    console.log('child render')
    return (
    <p>{seconds}</p>
    )
}

export default React.memo(Child)