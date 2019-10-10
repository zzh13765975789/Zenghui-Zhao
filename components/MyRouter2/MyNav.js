import React,{Component} from "react";
import {Link} from "react-router-dom";

function MyNav1(){
    return (
        <div className="myNav">
            <ul>
                <li>
                    <Link to="/">2home</Link>
                </li>
                <li>
                    <Link to="/about">2about</Link>
                </li>
                <li>
                    <Link to="/users">2users</Link>
                </li>
            </ul>
        </div>
    )
}

class MyNav extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return (
            <div className="myNav">
                <ul>
                    <li>
                        <Link to="/">2home</Link>
                    </li>
                    <li>
                        <Link to="/about">2about</Link>
                    </li>
                    <li>
                        <Link to="/users">2users</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MyNav