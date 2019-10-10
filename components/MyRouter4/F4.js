import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        let match=this.props.match;
        return (
            <div>
                <h2>404 : 你找的页面不存在或没有权限</h2>
            </div>
        )
    }
}

export default User;