import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import routes from "./routerConfig"

class MyRouter6 extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        let myStyle1={
            padding:"10px",
            width:"40%",
            background:"#f0f0f0"
        }
        let myStyle2={
            listStyleType:"none",
            padding:0
        }
        let myStyle3={
            flex:1,
            padding:"10px"
        }

        let Routes=routes.map((route,index)=>(
            <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
            />
        ))
        return (
            <Router>
                <div style={{display:"flex"}}>
                    <div style={myStyle1}>
                        <ul style={myStyle2}>
                            <li>
                                <Link to="/">第一</Link>
                            </li>
                            <li>
                                <Link to="/bb">第二</Link>
                            </li>
                            <li>
                                <Link to="/cc">第三</Link>
                            </li>
                        </ul>
                        {Routes}
                    </div>
                    <div style={myStyle3}>
                        {
                          routes.map((route,index)=>(
                            <Route 
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                          ))  
                        }
                    </div>
                </div>
            </Router>
        )
    }
}

export default MyRouter6;