import React from 'react';


class Home2 extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    let props=this.props;
    console.log("home props:",this.props);
    return (
      <div className="Home">
        这是首页
      </div>
    );
  }

}

function Home (props){
  console.log("home props:",props);
  return (
    <div className="Home">
      这是首页
    </div>
  )
}

export default Home;
