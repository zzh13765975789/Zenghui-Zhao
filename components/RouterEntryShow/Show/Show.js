import React,{Component} from "react";

class Show extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    				
    fn7SetHobby(arr){
        let obj={
            h1:"学习",
            h2:"健身",
            h3:"多问代码",
            h4:"多敲代码",
            h5:"多看代码"
        }
        
        let str="";
        for(var o of arr){
            //console.log("9999o:",o);
            str+=obj[o]+" "
        }
        
        return str;
    }
    
    fn8SetJob(str){
        let obj={
            s1:"UI",
            s2:"前端",
            s3:"后台",
            s4:"经理",
            s5:"总监"
        }
        return obj[str];
    
    }

    render(){
        console.dir(this);
        console.log("show arr:",this.props.arr);
        let arr=this.props.arr;
        arr=[]
        console.log("00000000000000arr:",arr);
        let trs=arr.map((item,index)=>{
            return (
                <tr key={item.id}>
                    <td>{item.user}</td>
                    <td>{item.sex==="0"?"男":"女"}</td>
                    <td>{this.fn7SetHobby(item.hobbyArr)}</td>
                    <td>{this.fn8SetJob(item.job)}</td>
                    <td>
                        <a href="http://www.baidu.com"  onClick={this.props.fn6.bind(this,item.id)}>删除</a>
                    </td>
                </tr>
            )
        })
        return(
            <div className="show" ref="show">
                <table className="tab">
                    <thead>
                        <tr>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>爱好</th>
                            <th>职业</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trs}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Show;