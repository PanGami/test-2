import React, { Component } from "react";
import $ from "jquery";
import Kartu from "./Kartu.js"
import './App.css';

class ListGallery extends Component {
    constructor() {
        super()
        this.state = {
            resto: [
                {
                    nama: "Warung Ayam",
                    kategori: "Chicken",
                    harga: "$$$$",
                    bintang: "5",
                    status: "Open Now"
                },
                {
                    nama: "Warung Ikan",
                    kategori: "Seafood",
                    bintang: "$$$",
                    status: "Open Now"
                },
                {
                    nama: "Streetfood",
                    kategori: "Streetfood",
                    harga: "$",
                    bintang: "$$",
                    status: "Open Now"
                },
                {
                    nama: "Streetfood",
                    kategori: "Streetfood",
                    harga: "$",
                    bintang: "$$",
                    status: "Open Now"
                },
            ],
            nama: "",
            kategori: "",
            bintang: "",
            status: ""
        }
    }
    render() {
        return (
            <div className="container">
                
                <div className="row">
                    {this.state.resto.map((item, index) => (
                        <Kartu
                            nama={item.nama}
                            kategori={item.kategori}
                            bintang={item.bintang}
                            status={item.status}
                        />
                    ))}
                </div>
                <button className="btn btn-success" onClick={() => this.Add()}>
                    Tambah Data
                </button>
                {/* component modal sbg control manipulasi data */}
                <div className="modal" id="modal_buku">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header">
                                Form Buku
                            </div>
                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Judul Buku
                                    <input type="text" className="form-control mb-2"
                                        value={this.state.judul}
                                        onChange={ev => this.setState({
                                            judul:
                                                ev.target.value
                                        })}
                                        required />
                                    Penulis Buku
                                    <input type="text" className="form-control mb-2"
                                        value={this.state.penulis}
                                        onChange={ev => this.setState({
                                            penulis
                                                : ev.target.value
                                        })}
                                        required />
                                    Penerbit Buku
                                    <input type="text" className="form-control mb-2"
                                        value={this.state.penerbit}
                                        onChange={ev => this.setState({ penerbit: ev.target.value })}
                                        required />
                                    Harga Buku
                                    <input type="number" className="form-control mb-2"
                                        value={this.state.harga}
                                        onChange={ev => this.setState({
                                            harga:
                                                ev.target.value
                                        })}
                                        required />
                                    Cover Buku
                                    <input type="url" className="form-control mb-2"
                                        value={this.state.cover}
                                        onChange={ev => this.setState({
                                            cover:
                                                ev.target.value
                                        })}
                                        required />
                                    <button className="btn btn-info btn-block" type="submit">
                                        Simpan
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    Add = () => {
        // menampilkan komponen modal
        $("#modal_buku").show(true)
        this.setState({
            isbn: Math.random(1, 10000000),
            judul: "",
            penulis: "",
            penerbit: "",
            cover: "",
            harga: 0,
            action: "insert"
        })
    }

    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_buku").show()
        this.setState({
            isbn: item.isbn,
            judul: item.judul,
            penulis: item.penulis,
            penerbit: item.penerbit,
            cover: item.cover,
            harga: item.harga,
            action: "update",
            selectedItem: item
        })
    }

    Save = (event) => {
        event.preventDefault();
        // menampung data state buku
        let tempBuku = this.state.buku

        if (this.state.action === "insert") {
            // menambah data baru
            tempBuku.push({
                isbn: this.state.isbn,
                judul: this.state.judul,
                penulis: this.state.penulis,
                penerbit: this.state.penerbit,
                cover: this.state.cover,
                harga: this.state.harga,
            })
        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempBuku.indexOf(this.state.selectedItem)
            tempBuku[index].isbn = this.state.isbn
            tempBuku[index].judul = this.state.judul
            tempBuku[index].penulis = this.state.penulis
            tempBuku[index].penerbit = this.state.penerbit
            tempBuku[index].cover = this.state.cover
            tempBuku[index].harga = this.state.harga
        }

        this.setState({ buku: tempBuku })

        // menutup komponen modal_buku
        $("#modal_buku").show(false)
    }



    


}



export default ListGallery;