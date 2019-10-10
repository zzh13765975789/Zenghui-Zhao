import React from 'react';


class About extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    console.log("about props:",this.props);
    return (
      <div className="About">
        这是关于我们
      </div>
    );
  }

}

export default About;
