import React from 'react';


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

function User1(props){
  console.log("1111props:",props);
  return (
    <div className="user">
      这是user界面 id=>
      {props.match.params.id}
      ==>{props.match.params.age}
      ==>{props.match.params.sex==="0"?"男":"女"}
    </div>
  )
}
function User2({match}){
  console.log("match:",match);
  return (
    <div className="user">
      这是user界面 id=>
      {match.params.id}
      ==>{match.params.age}
      ==>{match.params.sex==="0"?"男":"女"}
    </div>
  )
}

class User extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    let match=this.props.match;
    return (
      <div className="user">
        这是user界面 id=>
        {match.params.id}
        ==>{match.params.age}
        ==>{match.params.sex==="0"?"男":"女"}
    </div>
    )
  }
}

export default User;
