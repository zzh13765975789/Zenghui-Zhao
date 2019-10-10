import React,{Fragment} from "react";
import { withRouter } from 'react-router-dom';

class Btn extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        this.fn1=this.fn1.bind(this);
        this.fn2=this.fn2.bind(this);
        this.fn3=this.fn3.bind(this);
        this.fn4=this.fn4.bind(this);
    }


    fn1(){
        console.log("this:",this);
        this.props.history.push({pathname:"/",search:"a=1&b=2&c=3",hash:"d=4&e=5"})
    }
    fn2(){
        this.props.history.push({pathname:"/user/TK/18/0"})
    }
    fn3(){
        this.props.history.push({pathname:"/about",query:{user:"木子欢",hobby:"35"}})
    }
    fn4(){
        this.props.history.push({pathname:"/info",state:{user:"程序",hobby:"写代码"}})
    }

    render(){
        return (
            <Fragment>
                <button type="button" onClick={this.fn1}>首页</button>
                <button type="button" onClick={this.fn2}>params</button>
                <button type="button" onClick={this.fn3}>query</button>
                <button type="button" onClick={this.fn4}>state</button>
            </Fragment>
        )
    }
}


export default withRouter (Btn);