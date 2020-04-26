import React ,{ useState,useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect( ()=>{
    // document.title = `You clicked ${count} times`
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    console.log(data)
  },[])
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default  App