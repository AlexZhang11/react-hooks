import React ,{ useState,useEffect } from 'react';
import TodoForm from './TodoForm'

const App = () => {
 
  return (
    <div>
        <TodoForm onSubmit={text=>console.log(text)}/>
    </div>
  );
}

export default  App