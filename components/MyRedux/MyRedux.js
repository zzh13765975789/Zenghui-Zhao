import React from "react";
import {Input,Button,List} from "antd";

import store from "../../store";

import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from "../../store/actionCreators"
//引入store


class MyRedux extends React.Component{
    constructor(props){
        super(props);
        this.state=store.getState();

        this.inputChange=this.inputChange.bind(this);
        this.storeChange=this.storeChange.bind(this);
        this.btnClick=this.btnClick.bind(this);
        
        //store发生变化,自动执行 store.subscribe()
        store.subscribe(this.storeChange);
    }


    inputChange(e){
        let action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    storeChange(){
        //修改state的状态
        this.setState(store.getState())
    }

    btnClick(){
        let action = getAddItemAction();
        store.dispatch(action);
    }

    itemDelete(index,e){
        e.preventDefault();
        console.log("要删除的index:",index);
        let action=getDeleteItemAction(index);
        store.dispatch(action);
    }

    render(){


        return (
            <div className="myRedux" style={{marginTop:"10px",marginLeft:"10px"}}>
                <div>
                    <Input 
                        placeholder="请输入"
                        style={{width:"300px",marginRight:"10px"}}
                        value={this.state.inputValue}
                        onChange={this.inputChange}
                    />
                    <Button type="primary" onClick={this.btnClick}>添加</Button>
                </div>
                <div>
                    <List 
                        style={{marginTop:"10px",width:"400px"}}
                        bordered
                        dataSource={this.state.list}
                        renderItem={
                            (item,index)=>(
                                <List.Item>
                                    {item}
                                    <br />
                                    <a href="http://www.baidu.com" onClick={this.itemDelete.bind(this,index)}>删除</a>
                                </List.Item>
                            )
                        }
                    />
                </div>
            </div>
        )
    }
}

export default MyRedux;