import React from 'react';
import '../assets/css/Follow.css'
import Cell from '../components/Cell'
import querystring from 'query-string';
import axios from "axios";
export default class Follow extends React.Component{
  state={
    cells:[]
  };

  render(){
    let {match,location} = this.props;

    return (
      <div className="Follow">
        <Cell cells={this.state.cells} dataName="follow"/>
      </div>
    );
  }
  async componentDidMount(){
    let res = await axios({url:'/mock/follow',params:{_limit:15}});
    this.setState({cells:res.data.page_data})
  }
}