import React,{Component} from "react";
import '../assets/css/Reg.css'
import {Link} from 'react-router-dom'
import axios from "axios";

import {observer, inject} from 'mobx-react'

@inject('store')
@observer
class Reg extends Component {
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
      url:'/mock/reg',
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
      <div className="sign-up segments-page">
        <div className="nav">
           <ul>
             <li className="l-btn" onClick={()=>this.props.history.go(-1)}></li>
           </ul>
        </div>
        <div className="container">
        <div className="signup-contents">
          <div className="pages-title">
            <h3>Sign Up</h3>
          </div>
          <form>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="password"/>
            {/* <button className="button"><i className="fa fa-send"></i>Sign Up</button> */}
            
            <input type="button" value="注 册" className="login-btn"onClick={this.submit}/>

            <Link to="/login" className="login button"><i className="fa fa-send">Sign In</i></Link>

          </form>
          <div className="social-login">
            <h5>Sign Up with</h5>
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

export default Reg;