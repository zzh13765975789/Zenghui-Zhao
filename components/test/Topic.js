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

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

export default Topic;
