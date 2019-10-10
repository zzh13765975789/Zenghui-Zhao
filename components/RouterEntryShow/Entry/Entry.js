import React, {Component} from "react";

class Entry extends Component{
    constructor(props){
        super(props);
        this.state={
            user:"",
            sex:"",
            hobbyArr:[],
            job:"s1"
        }
        
        this.fn1=this.fn1.bind(this)
        this.fn2=this.fn2.bind(this)
        this.fn3=this.fn3.bind(this)
        this.fn4=this.fn4.bind(this)
        this.fun1=this.fun1.bind(this)
        
    }
    
    fn1(e){
        let val=e.target.value;
        this.setState({
            user:val
        })
        
/*					this.setState({
            [attr]:val
        })*/
    }
    
    fn2(e){
        let val=e.target.value;
        this.setState({
            sex:val
        })
    }
    
    fn3(e){
        let val=e.target.value;
        let i=this.state.hobbyArr.indexOf(val);
        if(i===-1){
            this.state.hobbyArr.push(val);
        }else{
            this.state.hobbyArr.splice(i,1);
        }
        let arr=[...this.state.hobbyArr];
        
        this.setState({
            hobbyArr:arr
        })
        
    }
    
    fn4(e){
        let val=e.target.value;
        this.setState({
            job:val
        })
    }

    fun1(){
        let o={...this.state};
        console.log("888o:",o);
        console.log("999:this:",this);
        this.props.location.state=o;
    }

    componentWillMount(){
        console.log("will props:",this.props);
    }

    render(){
        console.log("02props:",this.props);
        console.dir(this);
        return (
            <div className="entry" ref="entry">
                <label>
								姓名:<input type="text" defaultValue={this.state.user} placeholder='请输入姓名' onChange={this.fn1}/>
							</label>
							<div>
								性别  <br />
								<label>
									男 <input type="radio" name="sex" value="0" defaultChecked={this.state.sex==="0"} onChange={this.fn2}/>
								</label>
								<label>
									女 <input type="radio" name="sex" value="1" defaultChecked={this.state.sex==="1"} onChange={this.fn2} />
								</label>
							</div>
							<div>
								爱好 <br />
								<label>
									学习 <input type="checkbox"  value="h1" defaultChecked={this.state.hobbyArr.includes("h1")} onChange={this.fn3} />
								</label>
								<label>
									健身 <input type="checkbox"  value="h2" defaultChecked={this.state.hobbyArr.includes("h2")} onChange={this.fn3} />
								</label>
								<label>
									多问代码 <input type="checkbox"  value="h3" defaultChecked={this.state.hobbyArr.includes("h3")} onChange={this.fn3} />
								</label>
								<label>
									多敲代码 <input type="checkbox"  value="h4" defaultChecked={this.state.hobbyArr.includes("h4")} onChange={this.fn3} />
								</label>
								<label>
									多看代码 <input type="checkbox"  value="h5" defaultChecked={this.state.hobbyArr.includes("h5")} onChange={this.fn3} />
								</label>
							</div>
							<div>
							职业
								<select defaultValue={this.state.job} onChange={this.fn4}>
									<option value="s1">UI</option>
									<option value="s2">前端</option>
									<option value="s3">后台</option>
									<option value="s4">经理</option>
									<option value="s5">总监</option>
								</select>
							</div>
							<br />
							<div>
								{
                                    /*
                                    <button type="button" onClick={this.props.fn5.bind(this,this.state)}>添加</button>
                                    */
                                }
                                <button type="button" onClick={this.fun1}>添加</button>
							</div>
            </div>
        )
    }
}

export default Entry;