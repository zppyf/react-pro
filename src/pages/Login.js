import React,{Component} from "react";
import '../assets/css/Login.css'
// import '../assets/css1/a.css'

import {Link} from "react-router-dom"
class Login extends Component {
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
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="password"/>
            <button className="button"><i className="fa fa-send"></i>Sign In</button>
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