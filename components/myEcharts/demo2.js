import React from 'react';
import echarts from "echarts";
import axios from "axios";

class Demo2 extends React.Component{
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
            },
            yAxis:{},
            series:[{
                    name:"销量",
                    type:"bar",
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
    axios.get("http://127.0.0.1:81/getData3").then(data=>{
      console.log("data:",data);
      let obj=data.data;
      let arr1=[];
      let arr2=[];
      for(let o in obj){
        arr1.push(o);
        arr2.push(obj[o]);
      }
      option.xAxis.data=arr1;
      option.series[0].data=arr2;
      myChart.setOption(option);

    }).catch(err=>{
      console.log("err:",err);
    })



  }

  render(){
    return (
      <div className="demo2">
        <div className="box2" ref="main" style={{width:"600px",height:"400px"}}>
        </div>
      </div>
    );
  }

}

export default Demo2;
