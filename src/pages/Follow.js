import React from 'react';
import '../assets/css/Follow.css'
import Cell from '../components/Cell'
import querystring from 'query-string';
import axios from "axios";
import {observer, inject} from 'mobx-react'
@inject('store')
@observer
class Follow extends React.Component{
  // state={
  //   cells:[]
  // };

  constructor(props){
    super();
    props.store.list.get({url:'/mock/follow',params:{_limit:15},propsName:"follow"});
  }
  render(){
    let {match,location,follow} = this.props.store.list;

    return (
      <div className="Follow">
        <Cell cells={follow} dataName="follow"/>
      </div>
    );
  }
  // async componentDidMount(){
  //   let res = await axios({url:'/mock/follow',params:{_limit:15}});
  //   this.setState({cells:res.data.page_data})
  // }
}
export default Follow;