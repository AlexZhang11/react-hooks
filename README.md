1 useEffect
useEffect有两个参数，第一个是回调函数，第二个是一个变量，

可以用来替代三个生命周期函数，分别是componentDidMount,componentWillUnMount,componentDidUpdate;

第二个参数为空数组时不执行componentDidUpdate这个生命周期，不写的时候执行componentDidMount,componentDidUpdate，写了值的时候只会在该值变化的时候执行
，
useEffect(()=>{},[])


1 setState

this.setState({count:this.state.count+1})
this.setState({count:this.state.count+1})
this.setState({count:this.state.count+1})

这样写会合并成为
this.setState
({count:this.state.count+1},
{count:this.state.count+1},
{count:this.state.count+1}) //count =1


这样写会变成3
 this.setState((preState,props)=>({
    count:preState.count+1
 }))
 this.setState((preState,props)=>({
    count:preState.count+1
 }))
 this.setState((preState,props)=>({
    count:preState.count+1
 }))


 同时写多个setstate不会渲染多次，因为是批量处理，会攒一攒再执行