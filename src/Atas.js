import React from 'react';
import Utama from './utama';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container, Card, Button } from 'react-bootstrap';
import './App.css';

class Atas extends React.Component {
    render() {
        return (

            <div>

                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/beranda">Restaurant</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/gallery" className="nav-link">Gallery</Link>
                                <Link to="/beranda" className="nav-link">Beranda</Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div>
                    <div className="ms-5 mt-3">
                        <h1 className="ms-5">Restaurants</h1>
                        <p className="ms-5">magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna</p>
                    </div>
                    <div className="row ms-5 me-5">
                        <hr className="ms-5 me-5">
                        </hr>
                        <p className="ms-5">Filter by :</p>
                        <hr className="ms-5">
                        </hr>
                    </div>
                </div>
            </div>
        );
    }
}

export default Atas;