import React,{Component} from "react";
import '../assets/css/Column.css'
import Cell from "../components/Cell";
import axios from "axios";
import {observer, inject} from 'mobx-react'

@inject('store')
@observer
class Column extends Component {
  // state={
  //   cells:[]
  // };
    constructor(props){
      super();
       props.store.list.get({url:'/mock/column',params:{_limit:10},propsName:"column"});
    }
  render() {
    let {column} = this.props.store.list;
    return (
      <div className="Column">
        <Cell cells={column} dataName="column"/>
      </div>
    );
  }
  // async componentDidMount(){
  //   let res = await axios({url:'/mock/column',params:{_limit:10}});
  //   this.setState({cells:res.data.page_data})
  // }
}

export default Column;