import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
const NavB = () => {
  return (
    <div>
      <Navbar bg="danger" variant='dark' expand="lg">
        <Navbar.Brand href="#home">CRUD Basico</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className='nav-link' exact={true} to='/'>Home</NavLink>
            <NavLink className='nav-link' exact={true} to='/productos'>Productos</NavLink>
            <NavLink className='nav-link' exact={true} to='/productos/nuevo'>Agregar Producto</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavB;
