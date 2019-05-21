import React from 'react';
import '../assets/css/Follow.css'
import Cell from '../components/Cell'
import querystring from 'query-string';

export default class Follow extends React.Component{

  render(){

    let {match,location} = this.props;

    return (
      <div className="Follow">
       <Cell/>
      </div>
    )
  }
}