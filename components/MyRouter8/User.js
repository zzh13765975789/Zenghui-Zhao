import React from "react";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        console.log("User this.props:",this.props);
        let match=this.props.match;
        return(
            <div className="Home">
                姓名:{match.params.user}<br />
                年龄:{match.params.age}<br />
                性别:{match.params.sex==="0"?"男":"女"}
            </div>
        )
    }
}

export default Home;