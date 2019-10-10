import React from "react";
import {Redirect} from "react-router-dom";
class Proteted extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        let n=Math.random()>=0.5;
        console.log(n?"已登录":"未登录")
        return (
            <div>
                {
                    n ? "这是私有页面(已经登录)" :<Redirect to={{pathname:"/error"}} />
                }
            </div>
        )
    }
}

export default Proteted;