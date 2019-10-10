import React from "react"
import Entry from "./Entry"
import Show from "./Show"


class MyAxios extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){

        return (
            <div className="myAxios">
                <Entry />
                <Show />
            </div>
        )
    }
}

export default MyAxios;