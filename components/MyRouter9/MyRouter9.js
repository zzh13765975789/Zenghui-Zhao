import React from 'react';
import {
	BrowserRouter as Router,Route,Link,Switch 
} from 'react-router-dom';


//cnpm i react-router-dom --save-dev
//yarn add react-router-dom --dev

function Home(){
    return (<h2>这是主页页面</h2>)
}

let About=()=> <h2>这是关于页面</h2>

let Users1=()=> <h2>这是用户1页面</h2>

class Users2 extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return (
            <h2>这是用户2页面</h2>
        )
    }
}


function MyRouter9(){
    return (
        <Router>
            <nav>
                <Link to="/">主页</Link><br/>
                <Link to="/about">关于</Link><br/>
                <Link to="/users">用户1</Link><br/>
                <Link to="/:users">用户2</Link><br/>
            </nav>
            <div className="box1" style={{border:"1px solid red",padding:"5px",margin:"10px"}}>
                无Switch
               <Route path="/" exact component={Home}/>
               <Route path="/about" component={About}/>
               <Route path="/:users" component={Users2}/>
               <Route path="/users" component={Users1}/>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <div className="box2" style={{border:"1px solid blue",padding:"5px",margin:"10px"}}>
                无Switch,只配置符合条件的第一个
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/:users" component={Users2}/>
                    <Route path="/users" component={Users1}/>
                </Switch>
            </div>
        </Router>
    )
}

export default MyRouter9;			
		