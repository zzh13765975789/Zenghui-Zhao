//基本案例2将link部分拆分到header组件
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import About from './About';
import Topics from './Topics';


function RouterCom22() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

class RouterCom2 extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    return (
      <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
    );
  }

}






export default RouterCom2;