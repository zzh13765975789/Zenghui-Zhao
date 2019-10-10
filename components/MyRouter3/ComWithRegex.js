import React from "react";

class ComWithRegex extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        let match=this.props.match;
        console.log("match:",match);
        return (
            <div>
                数据:{match.params.direction}
            </div>
        )
    }
}

export default ComWithRegex;