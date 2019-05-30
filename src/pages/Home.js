import React,{Component} from "react";
import '../assets/css/Home.css';
import Swiper from '../components/Swiper';
import Cell from '../components/Cell';
import {Link} from "react-router-dom"
import {observer,inject} from "mobx-react"
import axios from 'axios';

@inject('store')
@observer
class Home extends Component{
//   state={
//     cells:[],
//     banners:[],
//     img:[]
//   };
  constructor(props){
    super();
    props.store.list.get({url: '/mock/home',params:{_limit:10},propsName: 'home'});
    props.store.list.get({url: '/mock/banner',params:{_limit:3},propsName: 'banner'});
    props.store.list.get({url: '/mock/img',params:{_limit:4},propsName: 'img'});
  }
  render(){
    let {home,banner,img} = this.props.store.list;
    return (
      <div className="Home">
        {/* <Swiper/> */}
        <Swiper {...this.props} banners={banner} dataName="banner"/>
         <div className="category segments">
          <div className="container">
            <div className="row">
                <div className="col s3">
                    <div className="content">
                        <a href="see-more-product.html">
                            <i className="fa fa-car"></i>
                            <span>Automotive</span>
                        </a>
                    </div>
                </div>
                <div className="col s3">
                    <div className="content">
                        <a href="see-more-product.html">
                            <i className="fa fa-cutlery"></i>
                            <span>Food</span>
                        </a>
                    </div>
                </div>
                <div className="col s3">
                    <div className="content">
                        <a href="see-more-product.html">
                            <i className="fa fa-camera-retro"></i>
                            <span>Camera</span>
                        </a>
                    </div>
                </div>
                <div className="col s3">
                    <div className="content">
                        <a href="see-more-product.html">
                            <i className="fa fa-futbol-o"></i>
                            <span>sport</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s3">
                    <div className="content">
                        <a href="see-more-product.html">
                            <i className="fa fa-female"></i>
                            <span>Fashion</span>
                        </a>
                    </div>
                </div>
                <div className="col s3">
                    <div className="content">
                        <a href="see-more-product.html">
                            <i className="fa fa-cubes"></i>
                            <span>Toy</span>
                        </a>
                    </div>
                </div>
                <div className="col s3">
                    <div className="content">
                        <a href="see-more-product.html">
                            <i className="fa fa-plug"></i>
                            <span>Electronic</span>
                        </a>
                    </div>
                </div>
                <div className="col s3">
                    <div className="content">
                        <a href="see-more-product.html">
                            <i className="fa fa-lemon-o"></i>
                            <span>Fruit</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
         </div>
    {/* <!-- end category --> */}

    {/* <!-- b-seller --> */}
       <div className="b-seller segments">
        <div className="container">
            <div className="section-title">
                <h3>Best Seller</h3>
            </div>
            <div className="row">
                  {img.map(item => (
                    <div className="col s6" key={item.id}>
                          <div className="content"
                            
                            // onClick={()=>{this.toDetail(item.id)}}
                          >
                              <div className="image">
                                  <img src={item.img} alt=""/>
                              </div>
                              <div className="text">
                              <Link to="/detail">
                                      <p>{item.title}</p>
                              </Link>
                                  <h5>${item.price}</h5>
                              </div>
                          </div>
                    </div>
                  ))
                  }
                {/* <div className="col s6">
                    <div className="content">
                        <div className="image">
                            <img src="images/product3.jpg" alt=""/>
                        </div>
                        <div className="text">
                            <Link to="/detail">
                                <p>Shoes that Light up When Dark</p>
                            </Link>
                            <h5>$32</h5>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <div className="row">
                  {img.map(item => (
                      <div className="col s6" key={item.id}>
                          <div className="content"
                            // key={item.id}
                            // onClick={()=>{this.toDetail(item.id)}}
                          >
                              <div className="image">
                                  <img src={item.img} alt=""/>
                              </div>
                              <div className="text">
                                <Link to="/detail">
                                    <p>{item.title}</p>
                                </Link>
                                    <h5>${item.price}</h5>
                              </div>
                          </div>
                     </div>
                      ))
                  } */}
                {/* <div className="col s6">
                    <div className="content">
                        <div className="image">
                            <img src="images/product1.jpg" alt=""/>
                        </div>
                        <div className="text">
                            <Link to="/detail"> 
                                <p>Casual Clothes in a Modern Style</p>
                            </Link>
                            <h5>$28</h5>
                        </div>
                    </div>
                </div> */}
            {/* </div> */}
        </div>
    </div>
    {/* <!-- end b-seller --> */}

    {/* <!-- banner --> */}
        <div className="banner">
            <div className="container-fluid">
                <div className="content">
                    <a href=""><img src="images/banner.png" alt=""/></a>
                </div>
            </div>
        </div>
    {/* <!-- end banner --> */}

    {/* <!-- product home --> */}
        <div className="product-home segments">
            <div className="container">
                <div className="section-title">
                    <h3>Change Your Style</h3>
                </div>
                <div className="product-slide owl-carousel owl-theme clear">
                {img.map(item => (
                    <div className="content aa" 
                    key={item.id}
                    // onClick={()=>{this.toDetail(item.id)}}
                    >
                    <Link to="/detail">
                        <img src={item.img} alt=""/>
                    </Link>
                    </div>
                
                   ))
                }
                </div>
                    
                <div className="l-more">
                    <a href="see-more-product.html">
              See More<i className="fa fa-angle-right"></i>
            </a>
                </div>
            </div>
        </div>
    {/* <!-- end product home --> */}

    {/* <!-- product home --> */}
        <div className="product-home p-bottom segments">
            <div className="container">
                <div className="section-title">
                    <h3>The Best Accessories</h3>
                </div>
                <div className="product-slide-two owl-carousel owl-theme clear">
                    <div className="content aa">
                        <a href="product-details.html"><img src="images/accessories2.jpg" alt=""/></a>
                    </div>
                    <div className="content aa">
                        <a href="product-details.html"><img src="images/accessories1.jpg" alt=""/></a>
                    </div>
                    <div className="content aa">
                        <a href="product-details.html"><img src="images/accessories3.jpg" alt=""/></a>
                    </div>
                    <div className="content aa">
                        <a href="product-details.html"><img src="images/accessories4.jpg" alt=""/></a>
                    </div>
                </div>
                <div className="l-more">
                    <a href="see-more-product.html">
              See More<i className="fa fa-angle-right"></i>
            </a>
                </div>
            </div>
        </div>
    {/* <!-- end product home --> */}

    {/* <!-- footer --> */}
       <footer>
            <div className="container">
                <a href=""><h1>JAZY</h1></a>
                <ul>
                    <li><a href=""><i className="fa fa-facebook"></i></a></li>
                    <li><a href=""><i className="fa fa-twitter"></i></a></li>
                    <li><a href=""><i className="fa fa-google"></i></a></li>
                    <li><a href=""><i className="fa fa-instagram"></i></a></li>
                </ul>
                <p>Copyright © All Right <a href="http://www.bootstrapmb.com/">Reserved</a></p>
            </div>
        </footer>
      </div>
    )
  }

}
export default Home;