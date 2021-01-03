import React, { Component } from 'react'
import BTProduct from './BTProduct'
import Cart from './Cart'

const mangSanPham = [
    {
        "maSP": 1,
        "tenSP": "VinSmart Live",
        "manHinh": "AMOLED, 6.2\", Full HD+",
        "heDieuHanh": "Android 9.0 (Pie)",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 5700000,
        "hinhAnh": "./img/vsphone.jpg"
    },

    {
        "maSP": 2,
        "tenSP": "Meizu 16Xs",
        "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
        "heDieuHanh": "Android 9.0 (Pie); Flyme",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 7600000,
        "hinhAnh": "./img/meizuphone.jpg"
    },

    {
        "maSP": 3,
        "tenSP": "Iphone XS Max",
        "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
        "heDieuHanh": "iOS 12",
        "cameraSau": "Chính 12 MP & Phụ 12 MP",
        "cameraTruoc": "7 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 27000000,
        "hinhAnh": "./img/applephone.jpg"
    }
]
export default class BTProductList extends Component {

    state = {
        detailProduct: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },

        gioHang: [
            {maSP: 3, tenSP: 'IPhoneX', hinhAnh: "./img/applephone.jpg", giaBan: 2000, soLuong: 3}
        ] //dữ liệu giõ hàng
    }

    xemChiTiet = (product) => {
        this.setState({detailProduct: product})
    }

    render() {
        let { detailProduct } = this.state;
        return (
            <div className="container">
                <h1 className="text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    <div className="col-12 text-right">
                        <span style={{cursor:'pointer'}} data-toggle="modal" data-target="#modelId">
                            Giỏ hàng ({this.getTotalProductGioHang()})
                        </span>
                        <Cart 
                            xoaSanPhamGioHang = {this.xoaSanPhamGioHang} 
                            thaydoiSlSanPham = {this.thaydoiSlSanPham}
                            saveCartProduct = {this.saveCartProduct}
                            gioHang={this.state.gioHang}/>
                    </div>
                </div>
                <div className="row">
                    {this.renderProductList()}
                </div>
                <div className="mt-5">
                    {this.renderDetailProduct(detailProduct)}
                </div>
            </div>
        )
    }

    renderProductList = () => {
        return mangSanPham.map((item, index) => {
            return <div className="col-4" key={index}>
                <BTProduct addCartProduct={this.addCartProduct} xemChiTiet={this.xemChiTiet} product={item}></BTProduct>
            </div>
        })
    }


    renderDetailProduct = (detail) => {
        return <div className="row">
            <div className="col-4">
                <h3 className="text-center">{detail.tenSP}</h3>
                <img src={detail.hinhAnh} height='200'></img>
            </div>

            <div className="col-8">
                <h3>Thông số kĩ thuật</h3>
                <table className="table">
                    <tr>
                        <td>Màn hình</td>
                        <td>{detail.manHinh}</td>
                    </tr>
                    <tr>
                        <td>Hệ điều hành</td>
                        <td>{detail.heDieuHanh}</td>
                    </tr>
                    <tr>
                        <td>Camera trước</td>
                        <td>{detail.cameraTruoc}</td>
                    </tr>
                    <tr>
                        <td>Camera sau</td>
                        <td>{detail.cameraSau}</td>
                    </tr>
                    <tr>
                        <td>RAM</td>
                        <td>{detail.ram}</td>
                    </tr>
                    <tr>
                        <td>ROM</td>
                        <td>{detail.rom}</td>
                    </tr>
                </table>
            </div>
        </div>
    }

    addCartProduct = (product) => {
        const spGioHang = {...product, soLuong: 1}

        const productFind = this.state.gioHang.find(item => {
            return item.maSP === product.maSP;
        });

        if (productFind) {
            productFind.soLuong += 1;
        } else {
            this.state.gioHang.push(spGioHang);
        }

        this.setState({gioHang: this.state.gioHang});
        console.log(this.state.gioHang);
    }

    getTotalProductGioHang() {
        // let count = 0;
        // this.state.gioHang.forEach(item => {
        //     count += item.soLuong;
        // });

        // return count;
        return this.state.gioHang.reduce((tongSL, sp, index) => {
            return tongSL + sp.soLuong
        }, 0).toLocaleString()
    }

    thaydoiSlSanPham = (product, increase) => {
        const productTimKiem = this.state.gioHang.find((item) => {
            return item.maSP === product.maSP;
        });

        if (productTimKiem) {
            if (increase) {
                productTimKiem.soLuong += 1;
            } else {
                if (productTimKiem.soLuong > 1) {
                    productTimKiem.soLuong -= 1;
                }
            }
        }

        this.setState({gioHang: this.state.gioHang})

    }

    xoaSanPhamGioHang = (product) => {
        // const productTimKiem = this.state.gioHang.find((item) => {
        //     return item.maSP === product.maSP;
        // });

        // if (productTimKiem) {
        //     this.state.gioHang.pop(productTimKiem);
        // }

        // this.setState({gioHang: this.state.gioHang})
        this.setState({gioHang: this.state.gioHang.filter((item) => {
            return item.maSP !== product.maSP;
        })});
    }

    saveCartProduct = () => {
        const productTimKiems= this.state.gioHang.filter((item) => {
            return item.soLuong === 0;
        });

        console.log(productTimKiems);
    }
}
