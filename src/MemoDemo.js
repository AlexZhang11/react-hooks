import React from 'react';
import Child from './MemoDemoChild'


class MemoDemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time:new Date()
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                time:new Date()
            })
        },1000)
    }


    render(){
        return (
            <>
            <Child seconds={1}/>
            <div>{this.state.time.toString()}</div>
            </>
        )
    }
}


export default MemoDemo