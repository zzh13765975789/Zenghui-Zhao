import React from 'react';
import echarts from "echarts";

class Demo1 extends React.Component{
  constructor(props){
    super(props);
    this.state={
        option:{
            title:{
                text:"Echarts demo"
            },
            tooltip:{},
            legend:{
                data:["销量"]
            },
            xAxis:{
                data:["aa","bb","cc","dd","ee","ff"]
            },
            yAxis:{},
            series:[{
                    name:"销量",
                    type:"bar",
                    data:[5,20,36,10,10,20]
                }
            ]
        }
    }
  }

  componentDidMount(){
    let dom=this.refs.main;
    console.log("dom:",dom);
    var myChart=echarts.init(dom);
    let option=this.state.option;
    //使用刚指定的配置项和数据显示图表
    myChart.setOption(option);

  }

  render(){
    return (
      <div className="demo1">
        <div className="box1" ref="main" style={{width:"600px",height:"400px"}}>
        </div>
      </div>
    );
  }

}

export default Demo1;
