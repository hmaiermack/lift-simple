import React from 'react';
import {Link} from "react-router-dom";
import Burger from './burger/burger';
import './nav.css'

  
  function Nav(props){
          return(
          <nav className="nav">
              <Link to="/"><h1 className="navHeader">Lift Simple.</h1></Link>
              <Burger />
          </nav>
      )
  }

  export default Nav;