import React,{Component} from "react";
import '../assets/css/Reg.css'
import {Link} from 'react-router-dom'
class Reg extends Component {
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
            <input type="text" placeholder="Full Name"/>
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="password"/>
            <input type="password" placeholder="Retype Password"/>
            <button className="button"><i className="fa fa-send"></i>Sign Up</button>
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