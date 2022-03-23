import React from 'react'
import Utama from './utama';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container, Card, Button } from 'react-bootstrap';
import './App.css';


class Test extends React.Component{
    render(){
        return(
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1024px-Black_flag.svg.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                        <Button>Learn More</Button>
                    
                </Card>

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
        )
    }
}

export default Test;