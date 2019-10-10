import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        console.log("About this.props:",this.props);
        let location=this.props.location;
        console.log("location",location);
        let query=location.query;
        // if(!query){
        //     return null;
        // }
        return(
            <div className="About">
                姓名:{query?query.user:"没传值"}<br/>
                爱好:{query?query.hobby:"没还好"}
            </div>
        )
    }
}

export default About;