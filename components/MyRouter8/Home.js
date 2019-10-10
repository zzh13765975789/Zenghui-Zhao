import React from "react";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    fn1(){
       // console.log("00",this);
        this.props.history.replace({pathname:"/",search:"a=1&b=2&c=3",hash:"d=4&e=5"})
    }
    fn2(){
        //console.log("11",this);
        this.props.history.push({pathname:"/user/kky/18/0"})
    }
    fn3(){
        //console.log("22",this);
        this.props.history.push({pathname:"/about",query:{user:"kky",hobby:18}})
    }
    fn4(){
        //console.log("33",this);
        this.props.history.push({pathname:"/info",state:{user:"ldw",hobby:16}})
    }
    render(){
        return(
            <div className="Home">
                这是首页
                <br />
                <br />
                <br />
                <button type="button" onClick={this.fn1.bind(this)}>首页</button> 
                <button type="button" onClick={this.fn2.bind(this)}>用户 params </button>
                <button type="button" onClick={this.fn3.bind(this)}>关于 query</button>
                <button type="button" onClick={this.fn4.bind(this)}>a state</button>
            </div>
        )
    }
}

export default Home;