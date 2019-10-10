import React,{Component} from 'react';
import {Route,Link} from "react-router-dom";
import User from "./User"




function Users1(props){
  console.log("000props:",props);
  let match=props.match;
  return (
    <div className="users">
      <h2>这是用户users界面</h2>
      <ol>
          <li>
            <Link to={`${match.url}/user/aa/age/20/0`}>aa</Link>
          </li>
          <li>
            <Link to={`${match.url}/user/bb/age/18/1`}>bb</Link>
          </li>
          <li>
            <Link to={`${match.url}/user/cc/age/16/0`}>cc</Link>
          </li>
      </ol>
      <div className="view2">
        <Route path={`${match.path}/user/:id/age/:age/:sex`} component={User} />
        <Route exact path={match.path} render={()=> <h3>这是users的标题</h3>} />
      </div>
    </div>
  )
}

class Users extends Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    console.log("01this:",this);
    let match=this.props.match;
    return (
      <div className="users">
        <h2>这是用户users界面</h2>
        <ol>
            <li>
              <Link to={`${match.url}/user/aa/age/20/0`}>aa</Link>
            </li>
            <li>
              <Link to={`${match.url}/user/bb/age/18/1`}>bb</Link>
            </li>
            <li>
              <Link to={`${match.url}/user/cc/age/16/0`}>cc</Link>
            </li>
        </ol>
        <div className="view2">
          <Route path={`${match.path}/user/:id/age/:age/:sex`} component={User} />
          <Route exact path={match.path} render={()=> <h3>这是users的标题</h3>} />
        </div>
      </div>
    )
  }
}



export default Users;
