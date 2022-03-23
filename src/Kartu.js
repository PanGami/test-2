import React from "react"
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container, Card, Button } from 'react-bootstrap';

class Kartu extends React.Component {
    render() {
        return (
            <div className="col-lg-6 col-sm-12 p-2">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1024px-Black_flag.svg.png" />
                    <Card.Body>
                        <Card.Title>{this.props.nama}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                    <Button>Learn More</Button>
                </Card>

                <div className="card">
                    <div className="card-body row">
                        {/* menampilkan Gambar / cover */}
                        <div className="col-5">
                            <img src={this.props.cover} className="img"
                                height="200" />
                        </div>

                        {/* menampilkan deskripsi */}
                        <div className="col-7">
                            <h5 className="text-info">
                                {this.props.judul}
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

                            {/* button untuk mengedit */}
                            <button className="btn btn-sm btn-primary m-1"
                                onClick={this.props.onEdit}>
                                Edit
                            </button>

                            {/* button untuk menghapus */}
                            <button className="btn btn-sm btn-danger m-1"
                                onClick={this.props.onDrop}>
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Kartu;