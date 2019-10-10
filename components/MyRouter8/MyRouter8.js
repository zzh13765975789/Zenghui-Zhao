import React from "react";

import {BrowserRouter as Router,
        NavLink,
        Link,
        Route
} from "react-router-dom";

import "./MyRouter8.css"

import Home from "./Home";
import User from "./User";
import About from "./About";
import Info from "./Info";
import Btn from "./Btn";

class MyRouter8 extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        /**
         *  path传值 1:传输量小 2.刷新页面数据不丢失
         *  query传值 1:传输量大 2.刷新页面数据丢失
         *  state传值 1.传输量大 2.刷新页面数据不会丢失
         */
        return (
            <div>
                <Router>
                    <Btn />
                    <br />
                    <br />
                    <br />
                    <ol>
                        <li>
                            <Link to="/">首页</Link>
                        </li>
                        <li>
                            <Link to="/user/kky/18/0">用户1</Link>
                        </li>
                        <li>
                            <Link to="/user/ztt/age/20/sex/1">用户2</Link>
                        </li>
                        <li>
                            <Link to={{pathname:"/about",query:{user:"秦琳琳",hobby:"吃"}}} >秦琳琳</Link>
                        </li>
                        <li>
                            <NavLink to={{pathname:"/about",query:{user:"张彤彤",hobby:"18瓶"}}} >胀痛痛</NavLink>
                        </li>
                        <li>
                            <Link to={{pathname:"/info",state:{user:"席孟凯",hobby:"擦玻璃"}}}>席孟凯</Link>
                        </li>
                        <li>
                            <Link to={{pathname:"/info",state:{user:"侯依娇",hobby:"睡觉觉"}}} >侯总</Link>
                        </li>
                    </ol>
                    <div>
                        <Route path="/" exact={true}  component={Home} />
                        <Route path="/user/:user/:age/:sex" exact  component={User} />
                        <Route path="/user/:user/age/:age/sex/:sex"  component={User} />
                        <Route path="/about"  component={About} />
                        <Route path="/info"  component={Info} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default MyRouter8;