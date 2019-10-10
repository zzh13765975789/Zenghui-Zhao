import React,{Component,Fragment} from "react";
//import Button from 'antd/es/button';
import { Button } from 'antd';
//import { ConfigProvider, DatePicker, message } from 'antd';
import { ConfigProvider, DatePicker, message, Alert } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


class MyAntd extends Component{
    constructor(props){
        super(props);
        this.state={
            date:null
        }
    }

    handleChange = date => {
        message.info(`您选择的日期是: ${date ? date.format('YYYY-MM-DD') : '未选择'}`);
        this.setState({ date });
    };


    fn(){
        console.log("组件中的点击事件");
    }

    render(){
        const { date } = this.state;
        return (
            <div className="myAntd">
                这是antd
                <br />
                <div className="box">
                <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false}>
                <Button type="primary" onClick={this.fn.bind(this)}>点我</Button>
                    <div style={{ width: 400, margin: '100px auto' }}>
                    <DatePicker onChange={this.handleChange} />
                    <div style={{ marginTop: 20 }}>
                        当前日期：{date ? date.format('YYYY-MM-DD') : '未选择'}
                    </div>
                    </div>
                </ConfigProvider>
                </div>
                <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <Button type="link">Link</Button>

                <br />
                <Button type="primary" shape="circle" icon="search" />
                <Button type="primary" shape="circle">
                A
                </Button>
                <Button type="primary" icon="search">
                Search
                </Button>
                <Button shape="circle" icon="search" />
                <Button icon="search">Search</Button>
                <br />
                <Button shape="circle" icon="search" />
                <Button icon="search">Search</Button>
                <Button type="dashed" shape="circle" icon="search" />
                <Button type="dashed" icon="search">
                Search
                </Button>
                </div>
            </div>
        )
    }
}

export default MyAntd;
