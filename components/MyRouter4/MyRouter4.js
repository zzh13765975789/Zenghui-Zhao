import React from "react";
import {BrowserRouter as Router,Route,Link,Redirect} from "react-router-dom";
import MyNav from "./MyNav.js"
import Public from "./Public.js"
import F4 from "./F4.js"
import Proteted from "./Proteted.js"


class MyRouter4 extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return (
            <div className="myRouter3">
                <Router>
                    <MyNav />
                    {
                        /*
                            动态路由
                         */
                    }

                    <Route path="/public" component={Public} />
                    <Route path="/error" component={F4} />
                    <Route path="/proteted" component={Proteted} />
                </Router>
            </div>
        )
    }
}


export default MyRouter4;
