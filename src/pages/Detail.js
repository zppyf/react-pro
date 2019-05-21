import React from 'react';
// import querystring from 'query-string';
import '../assets/css1/icon.css';
import '../assets/css1/materialize.css';
import '../assets/css1/loaders.css';
import '../assets/css1/line-awesome.css';
import '../assets/css1/line-awesome-font-awesome.css';
import '../assets/css1/owl.carousel.min.css';
import '../assets/css1/owl.theme.default.min.css';
import "../assets/css/Detail.css";
import '../assets/css1/a.css';
// import '../library/jquery.min.js';
// import '../library/materialize.js';
// import '../library/owl.carousel.min.js';
// import '../library/main.js';
import Swiper from '../components/Swiper';
import axios from 'axios';



export default class Detail extends React.Component{
  state={
    banners:[]
  };

  render(){

    let {match,location} = this.props;

    return (
      <div className="Detail">
         <div className="nav">
           <ul>
             <li className="l-btn" onClick={()=>this.props.history.go(-1)}></li>
           </ul>
         </div>
         <Swiper {...this.props} banners={this.state.banners} dataName="banner"/>
         <div className="segments-page">
          <div className="container">
            <div className="product-details">
              <div className="contents">
                
                <div className="desc-short">
                  <h4>Casual Clothes in a Modern Style</h4>
                  <h5>$28</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus cum autem illo libero </p>
                  <button className="button"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                </div>
                <div className="share-media">
                  <h5>Share</h5>
                  <ul>
                    <li><a href=""><i className="fa fa-facebook"></i></a></li>
                    <li><a href=""><i className="fa fa-twitter"></i></a></li>
                    <li><a href=""><i className="fa fa-google"></i></a></li>
                  </ul>
                </div>
                <div className="desc-long">
                  <h5>Description</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quos corrupti odio totam, repellat in dolorem at minus explicabo optio doloremque, omnis odit ad, maxime. Aut, totam ea rerum soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat cum vero veritatis eius autem labore quas facere quasi! Eos nesciunt, similique quae</p>
                </div>
              </div>
              <div className="review">
                <h5>Review</h5>
                <div className="comment-people">
                  <div className="contents">
                    <div className="icon">
                      <img src="/images/comment1.png" alt=""/>
                    </div>
                    <div className="text">
                      <h6>John Doe</h6>
                      <p className="date">January 10, 2018</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                  <div className="contents reply">
                    <div className="icon">
                      <img src="/images/comment2.png" alt=""/>
                    </div>
                    <div className="text">
                      <h6>Jordan <i className="fa fa-bookmark"></i></h6>
                      <p className="date">January 10, 2018</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-post">
                <div className="comment-title">
                  <h5>Leave Your Reply</h5>
                </div>
                <form>
                  <input type="text" placeholder="Name"/>
                  <input type="email" placeholder="Email"/>
                  <textarea className="no-mb" cols="30" rows="10" placeholder="Message"></textarea>
                  <button className="button">Submit</button>
                </form>
              </div>
            </div>
            </div>
          </div>
         
      </div>
    );
  }
  async componentDidMount(){


    let resBanner = await axios({url:'/mock/banner',params:{_limit:3}});
    this.setState({banners:resBanner.data.page_data})

  }
}
