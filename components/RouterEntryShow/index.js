import React, {Component} from "react";
import {BrowserRouter as Router, Route,Link} from "react-router-dom";
import Entry from "./Entry/Entry"
import "./Entry/Entry.css"
import Show from "./Show/Show"
import "./Show/Show.css"


class EntryShow extends Component{
    constructor(props,context){
        super(props);
        this.state={};
        console.log("context:",context);
    }

    render(){
        console.log("00,props:",this.props);
        console.log("01,state:",this.state);
        console.dir(this);
        console.dir(Entry);
        console.dir(Show);
        return (
            <div className="entryShow">
                <Router age="20">
                    <div className="Nav">
                       <ol>
                           <li>
                            <Link to="/entry" >录入</Link>
                           </li>
                           <li>
                            <Link to="/show">显示</Link>
                           </li>
                       </ol>
                    </div>
                    <div className="view">
                        <Route path="/entry" component={Entry}  />
                        <Route path="/show" component={Show}   />
                    </div>
                </Router>
            </div>
        )
    }
}

export default EntryShow;