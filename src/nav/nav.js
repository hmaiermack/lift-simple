import React from 'react';
import {Link} from "react-router-dom";
import Burger from './burger/burger'
import './nav.css'

  
  function Nav(props){
          return(
          <div className="nav">
              <Link to="/"><h1 className="navHeader">Lift Simple.</h1></Link>
              <Burger />
          </div>
      )
  }

  export default Nav;