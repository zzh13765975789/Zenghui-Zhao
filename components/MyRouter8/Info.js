import React from "react";

class Info extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        console.log("Info this.props:",this.props);
        let state=this.props.location.state
        return(
            <div className="Info">
                姓名:{state.user}<br />
                爱好:{state.hobby}<br />
            </div>
        )
    }
}

export default Info;