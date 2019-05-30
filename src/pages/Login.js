import React,{Component} from "react";
import '../assets/css/Login.css'
// import '../assets/css1/a.css'
import {Link} from 'react-router-dom'
import axios from 'axios';

import {observer, inject} from 'mobx-react'

@inject('store')
@observer
class Login extends Component {
  state={
    username:'',
    password:'',

  }
  changeIpt = (ev) => {
    this.setState({
      [ev.target.name]:ev.target.value
    })
  }
  submit = async () => {
    let res = await axios({
      url:'/mock/login',
      params:{
        username:this.state.username,
        password:this.state.password
      }
    });

    // console.log(res)
    if (res.data.error===0){
      //写入local && 跳转user
      localStorage.setItem('rc_user',JSON.stringify(res.data.page_data))
      this.props.history.push('/user')
    } else {
      alert('失败')
    }
  }
  render() {
    return (
      <div className="sign-in segments-page">
        <div className="nav">
           <ul>
             <li className="l-btn" onClick={()=>this.props.history.go(-1)}></li>
           </ul>
        </div>
        <div className="container">
        <div className="signin-contents">
          <div className="pages-title">
            <h3>Sign In</h3>
          </div>
          <form>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="password"/>
          <input type="button" value="Sign In" className="login-btn" onClick={this.submit}/>
            
            <Link to="/reg" className="reg button"><i className="fa fa-send">Sign Up</i></Link>

          </form>
          <div className="social-login">
            <h5>Sign In with</h5>
            <div className="row">
              <div className="col s6">
                <button className="button-full button-facebook">Facebook</button>
              </div>
              <div className="col s6">
                <button className="button-full button-twitter">Twitter</button>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <button className="button-full button-linkedin">Linkedin</button>
              </div>
              <div className="col s6">
                <button className="button-full button-google">Google+</button>
              </div>
            </div>
          </div>
        </div>
        </div>
	    </div>
    );
  }
}

export default Login;