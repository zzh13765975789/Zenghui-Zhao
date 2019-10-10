import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return (
            <div>
               这是公共页面,不需要登录
            </div>
        )
    }
}

export default User;