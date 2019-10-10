import React from "react"
import {Link} from "react-router-dom";
let MyNav=()=>{
    return (
        <nav>
            <Link to="/public" >公共页面</Link>
            <br/>
            <Link to="proteted" >私有页面</Link>
        </nav>
    )
}

export default MyNav;