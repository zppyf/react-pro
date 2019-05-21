import React,{Component} from "react";

import '../assets/css/Cell.css'
import {Link} from 'react-router-dom'

class Cell extends Component {
  render() {
    return (
      <div className="cell">
        <Link to={{
          pathname:'/detail/1',
          search:"?dataName=column"
          }}>
          <h2>1.xx</h2>
          <p>oooo</p>
        </Link>
      </div>
    );
  }
}

export default Cell;