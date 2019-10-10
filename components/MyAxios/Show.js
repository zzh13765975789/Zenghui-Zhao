import React from "react";
import axios from "axios";

class Show extends React.Component{
    constructor(props){
        super(props);
        this.state={
            arr:[]
        };
    }

    componentWillMount(){
        this.getData();
    }

    getData(){
        let url="http://127.0.0.1:81";
        axios.get(url+"/getData").then(data=>{
            console.log("getData data:",data);
            this.setState({
                arr:data.data
            },()=>{
                console.log("state:",this.state);
            })
        },err=>{
            console.log("err:",err);
        })
    }

    delItem(id,e){
        e.preventDefault();
        console.log("要删除的id:",id);
        /*
        axios.post(url,{id}).then
        */
    }


    render(){
        let arr=this.state.arr;
        if(arr.length===0){
            return null;
        }
        let lis=arr.map(item=>{
            return <li key={item.id}>
                手机:{item.phone}
                <br />
                密码:{item.pwd}
                <br />
                <a href="http://www.baidu.com" onClick={this.delItem.bind(this,item.id)}>删除</a>
            </li>
        })
        return (
            <div className="show">
                <ol>
                    {lis}
                </ol>
            </div>
        )
    }
}

export default Show;