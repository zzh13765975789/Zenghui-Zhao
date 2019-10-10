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
                数据:{match.params.user}
            </div>
        )
    }
}

export default User;