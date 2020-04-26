import React from 'react';

export default class SetStateDemo extends React.Component{
    constructor(){
        super()
        this.state = {
            count :0
        }
    }

    componentDidMount(){
        // this.setState({count:this.state.count+1})
        // this.setState({count:this.state.count+1})
        // this.setState({count:this.state.count+1})
        this.setState((preState,props)=>({
            count:preState.count+1
        }))
        this.setState((preState,props)=>({
            count:preState.count+1
        }))
        this.setState((preState,props)=>({
            count:preState.count+1
        }))
    }

    render(){
        console.log('rendering')
        return (
        <div>{this.state.count}</div>
        )
    }
} 