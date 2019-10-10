import React from 'react';
import {Route, Link } from "react-router-dom";
import Topic from './Topic';




function Topics2({ match }) {
  console.log("match:",match);
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}


class Topics extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    console.log("props:",this.props);
    return (
<div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${this.props.match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${this.props.match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${this.props.match.path}/:id`} component={Topic} />
      <Route
        exact
        path={this.props.match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
    );
  }

}

export default Topics;