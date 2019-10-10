import React from 'react';
import { Route, Link } from "react-router-dom";


class MyTag extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    console.log("user props:",this.props);
    let match=this.props.match;
    let to=this.props.to;
    let exact=this.props.exact;
    let label=this.props.label;
    return (
      <Route
        path={to}
        exact={exact}
        children={(match)=>(
          <div className={match?"active":""}>
            {match?"请选择>":""}
            <Link to={to}>{label}</Link>
          </div>
        )} 
      />
    );
  }

}

export default MyTag;
