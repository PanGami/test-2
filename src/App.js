import React from 'react';
import Utama from './utama';
import Atas from './Atas';
import Test from './Test';
import Gallery from './Gallery';
import {Link} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container, Card, Button } from 'react-bootstrap';
import './App.css';

class App extends React.Component{
  render(){
    return(
      
      
      <div>
        <p><Atas /></p>
        <p><Gallery /></p>
        <p><Test /></p>

        
        
      </div>
    );
  }
}

export default App;