import React from "react";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import User from "./User.js"
import ComWithRegex from "./ComWithRegex.js"

export default class MyRouter3 extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return (
            <div className="myRouter3">
                <Router>
                    <ul>
                        <li>
                            <Link to="/aa">aa</Link>
                        </li>
                        <li>
                            <Link to="/bb">bb</Link>
                        </li>
                        <li>
                            <Link to="/cc">cc</Link>
                        </li>
                        <li>
                            <Link to="/dd">dd</Link>
                        </li>
                    </ul>
                    {
                        /*
                            动态路由
                         */
                    }

                    <Route path="/:user" component={User} />
                    <Route path="/order/:direction(asc|desc)" component={ComWithRegex} />
                </Router>
            </div>
        )
    }
}
