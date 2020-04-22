import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from 'react-bootstrap';

class Navigation extends Component{
render(){
    return(
        <NavBar collapseOnSelect expand="lg" bg="dark" variant="dark"> 
        </NavBar>
  )
}
}
export default Navigation