import React,{useState} from 'react'
const useInputValue = (initValue)=>{
    const [value,setValue] = useState(initValue)
    return {
        value,
        onChange:e=>setValue(e.target.value)
    }
}
export default ({onSubmit})=>{
    const text = useInputValue('')
    return (
        <form onSubmit = {e=>
           { e.preventDefault();
            onSubmit(text.value)
        }
        }>
            <input type='text' {...text}/>
        </form>
    )
}