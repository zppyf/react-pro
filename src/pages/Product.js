import React from 'react';

import {Link, Route} from 'react-router-dom'
import Detail from "./Detail";

import querystring from 'query-string';


export default class Product extends React.Component{

  render(){
    let {history,location,match} = this.props;
    return (
      <div className="Product">
        <h3>Product</h3>

        {/*<Link to="/product/detail/1?a=1">商品001</Link>*/}

        {/*<Route path="/product/detail/:id" component={Detail}/>*/}

        <Link to={match.url + "/detail/1"} >商品001</Link>
        <Link to={{
          pathname:match.url + '/detail/2',
          search:querystring.stringify({a:1}),
        }} >商品002</Link>

        <Route path="/product/detail/:id" component={Detail}/>

      </div>
    )
  }

}
