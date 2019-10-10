import React from "react";
import axios from "axios";
import "./Entry.css"
import qs from "qs"


class Entry extends React.Component{
    constructor(props){
        super(props);
        this.state={
            phone:"",
            pwd:""
        };
        this.fn2=this.fn2.bind(this);
        this.fn3=this.fn3.bind(this);
        this.fn4=this.fn4.bind(this);
        this.fn5=this.fn5.bind(this);
        this.fn6=this.fn6.bind(this);
        this.fn8=this.fn8.bind(this);
        this.fn9=this.fn9.bind(this);
        this.fn9_1=this.fn9_1.bind(this);
        this.fn10=this.fn10.bind(this);
        this.fn11=this.fn11.bind(this);
    }


    fn1(attr,e){
        let val=e.target.value;
        this.setState({
            [attr]:val
        });
    }

    fn2(){
        let url="http://127.0.0.1:81";
        axios.get(url+"/addGet1?phone="+this.state.phone+"&pwd="+this.state.pwd).then((data)=>{
            console.log("addGet1 data:",data);
        }).catch(err=>{
            console.log("1 err:",err);
        })
    }

    fn3(){
        let url="http://127.0.0.1:81";
        axios.get(url+"/addGet1",{
            params:{
                phone:this.state.phone,
                pwd:this.state.pwd
            }
        }).then((data)=>{
            console.log("addGet1 data:",data);
        }).catch(err=>{
            console.log("1 err:",err);
        })
    }

    fn4(){
        let url="http://127.0.0.1:81";
        // axios.get(url+"/addGet1?phone="+this.state.phone+"&pwd="+this.state.pwd)
        axios({
            method:"get",
            url:url+"/addGet1?phone="+this.state.phone+"&pwd="+this.state.pwd
        }).then((data)=>{
            console.log("addGet1 data:",data);
        }).catch(err=>{
            console.log("1 err:",err);
        })
    }
    fn5(){
        let url="http://127.0.0.1:81";
        // axios.get(url+"/addGet1",{
        //     params:{
        //         phone:this.state.phone,
        //         pwd:this.state.pwd
        //     }
        // })

        axios({
            method:"get",
            url:url+"/addGet1",
            params:{
                phone:this.state.phone,
                pwd:this.state.pwd
            }
        }).then((data)=>{
            console.log("addGet1 data:",data);
        }).catch(err=>{
            console.log("1 err:",err);
        })
    }

    fn6(){
        let url="http://127.0.0.1:81";
        axios.post(url+"/addPostObj1",{
            phone:this.state.phone,
            pwd:this.state.pwd
        }).then((data)=>{
            console.log("addPostObj1 data:",data);
        }).catch(err=>{
            console.log("1 err:",err);
        })
    }

    fn8(){
        let url="http://127.0.0.1:81";
        // axios.get(url+"/addGet1?phone="+this.state.phone+"&pwd="+this.state.pwd)
        axios({
            method:"post",
            url:url+"/addPostObj1",
            data:{
                phone:this.state.phone,
                pwd:this.state.pwd
            }
        }).then((data)=>{
            console.log("addGet1 data:",data);
        }).catch(err=>{
            console.log("1 err:",err);
        })
    }
    fn9(){
        let url="http://127.0.0.1:81";
        
        let usp=new URLSearchParams();
        usp.append("phone",this.state.phone);
        usp.append("pwd",this.state.pwd);

        console.log("usp:",usp);

        axios.post(url+"/addPostStr",usp).then((data)=>{
            console.log("addPostStr data:",data);
        }).catch(err=>{
            console.log("1 err:",err);
        })
    }
    fn9_1(){
        let url="http://127.0.0.1:81";
        
        let obj={
            phone:this.state.phone,
            pwd:this.state.pwd
        }
        console.log("9999obj:",obj);

        let qsObj=qs.stringify(obj);

        axios.post(url+"/addPostStr",qsObj).then((data)=>{
            console.log("addPostStr data:",data);
        }).catch(err=>{
            console.log("1 err:",err);
        })
    }

    fn10(){
        let url="http://127.0.0.1:81";
        let usp=new URLSearchParams();
        usp.append("phone",this.state.phone);
        usp.append("pwd",this.state.pwd);
        axios.post(url+"/addPostStr",usp).then((data)=>{
            console.log("addPostStr data:",data);
        }).catch(err=>{
            console.log("1 err:",err);
        })
    }

    fn11(){
        let url="http://127.0.0.1:81";
        let usp=new URLSearchParams();
        usp.append("phone",this.state.phone);
        usp.append("pwd",this.state.pwd);

        axios({
            method:"post",
            url:url+"/addPostStr",
            data:usp
        }).then((data)=>{
            console.log("addPostStr data:",data);
        }).catch(err=>{
            console.log("1 err:",err);
        })
    }



    render(){

        return (
            <div className="entry">
                <label>
                    手机号:<input type="text" onChange={this.fn1.bind(this,"phone")} />
                </label>
                <label>
                    密码:<input type="text" onChange={this.fn1.bind(this,"pwd")} />
                </label>

                <div>
                    <button type="button" onClick={this.fn2}>
                        get1 添加
                    </button>
                    <button type="button" onClick={this.fn3}>
                        get2 添加
                    </button>
                    <button type="button" onClick={this.fn4}>
                        get3 添加
                    </button>
                    <button type="button" onClick={this.fn5}>
                        get4 添加
                    </button>
                    <br />
                    <br />
                    <button type="button" onClick={this.fn6}>
                        post5 添加
                    </button>
                    <button type="button" onClick={this.fn8}>
                        post6 添加
                    </button>
                    <br />
                    <br />
                    <button type="button" onClick={this.fn9}>
                        post7 添加
                    </button>
                    <button type="button" onClick={this.fn9_1}>
                        post8 添加
                    </button>
                    <button type="button" onClick={this.fn10}>
                        post9 添加
                    </button>
                    <button type="button" onClick={this.fn11}>
                        post10 添加
                    </button>
                </div>
            </div>
        )
    }
}

export default Entry;