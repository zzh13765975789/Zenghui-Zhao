import React from 'react';
// import './MyRouter.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import MyTag from './MyTag';

class MyRouter extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    return (
      <div className="MyRouter">
        <Router>
          {/* <ul>
            <li>
              <Link to="/" >Home11</Link>
            </li>
            <li>
              <Link to="/about" >About</Link>
            </li>
            <li>
              <Link to="/user" >User</Link>
            </li>
          </ul> */}
          <br/>
          <br/>
          <MyTag exact={true} to="/" label="首页" />
          <MyTag  to="/about" label="关于" />
          <br/>
          <div className="view">
            <Route path="/" exact component={Home} />
            <Route path="/about"  component={About} />
          </div>
        </Router>
      </div>
    );
  }

}

export default MyRouter;
