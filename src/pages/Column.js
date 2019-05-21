import React from 'react';
import '../assets/css/Column.css'
import Cell from '../components/Cell'
import querystring from 'query-string';

export default class Column extends React.Component{

  render(){

    let {match,location} = this.props;

    return (
      <div className="Column">
       <Cell/>
      </div>
    )
  }

  // componentDidMount(){
  //   console.log(this.props.match.params.id);
  //   console.log(this.props.location.search);
  //   console.log(querystring.parse(this.props.location.search));
  //   //参数和数据 可以读发送请求...
  // }

}
