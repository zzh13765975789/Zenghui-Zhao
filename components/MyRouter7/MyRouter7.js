import React,{Fragment,Component} from "react";
import { BrowserRouter as Router, Route,NavLink , Link } from "react-router-dom";

import routes from "./routesConfig";

class MyRouter7 extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        let Roues=routes.map((item,index)=>{
            return <Route 
            key={index} path={item.path}
            exact={item.exact}
            component={item.component}
            />
        })

        let links = routes.map((item,index)=>{
            console.log("item?",item);
            return (
                <Fragment key={index}>
                    <Link key={index} to={item.url} exact={item.exact+""} >
                    {item.linkName}
                    </Link>
                    <br/>
               </Fragment> 
            )
        })
        return (
            <Router>
                <div className="link">
                    {links}
                </div>
                <div className="route">
                    {Roues}
                </div>
            </Router>
        )
    }

}

export default MyRouter7;