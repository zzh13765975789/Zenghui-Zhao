import React from "react";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Users from './Users';

import MyNav from './MyNav';

//1.基本路由
//2.二级路由
//3.动态路由

function MyRouter1(){
    console.log("999this:",this);
    return (
        <div className="myRouter">
            <Router>
                <div className="box1">
                    <MyNav />
                </div>
                <div className="view1">
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/users" component={Users} />
                </div>
            </Router>
        </div>
    )
}

class MyRouter  extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return  (
            <div className="myRouter">
            <Router>
                <div className="box1">
                    <MyNav />
                </div>
                <div className="view1">
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/users" component={Users} />
                </div>
            </Router>
        </div>
        )
    }
}


export default MyRouter;