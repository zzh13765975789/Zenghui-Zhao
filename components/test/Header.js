import React from 'react';
import { Link } from "react-router-dom";

class About extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    return (
      <div className="About">
        这是关于我们
      </div>
    );
  }

}


function Header() {
    return (
        <ul>
        <li>
          <Link to="/">2Home</Link>
        </li>
        <li>
          <Link to="/about">2About</Link>
        </li>
        <li>
          <Link to="/topics">2Topics</Link>
        </li>
      </ul>
    );
}

export default Header;