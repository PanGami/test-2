import React from "react"
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container, Card, Button } from 'react-bootstrap';

class Kartu extends React.Component {
    render() {
        return (
            <div className="col-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1024px-Black_flag.svg.png" />
                    <Card.Body>
                        <div>
                        <Card.Title>{this.props.nama}</Card.Title>
                        <Card.Text>{this.props.kategori}</Card.Text>
                        <Card.Text>{this.props.harga}</Card.Text>
                        <Card.Text>{this.props.bintang}</Card.Text>
                        <Card.Text>{this.props.status}</Card.Text>
                        </div>
                    </Card.Body>
                    <Button>Learn More</Button>

                </Card>
                {/* <div className="card">
                    <div className="card-body row">
                        <div className="col-5">
                            <img src={this.props.cover} className="img"
                                height="200" />
                        </div>

                        <div className="col-7">
                            <h5 className="text-info">
                                {this.props.nama}
                            </h5>
                            <h6 className="text-dark">
                                ISBN : {this.props.isbn}
                            </h6>
                            <h6 className="text-dark">
                                Penulis: {this.props.penulis}
                            </h6>
                            <h6 className="text-dark">
                                Penerbit: {this.props.penerbit}
                            </h6>
                            <h6 className="text-danger">
                                Harga: Rp {this.props.harga}
                            </h6>

                            <button className="btn btn-sm btn-primary m-1"
                                onClick={this.props.onEdit}>
                                Edit
                            </button>

                            <button className="btn btn-sm btn-danger m-1"
                                onClick={this.props.onDrop}>
                                Hapus
                            </button>
                        </div>
                    </div>
                </div> */}
                
            </div>
        )
    }
}
export default Kartu;