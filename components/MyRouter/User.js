import React from 'react';


class User extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    console.log("user props:",this.props);
    return (
      <div className="User">
        这是用户界面
      </div>
    );
  }

}

export default User;
