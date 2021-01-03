import React, { Component } from 'react'
import SanPham from './SanPham'

const mangSanPham = [
    { ma: 1, tenSp: 'IPhone 12', gia: '1000', img: './img/sp_blackberry.png' },
    { ma: 2, tenSp: 'Note 7', gia: '1000', img: './img/sp_iphoneX.png' },
    { ma: 3, tenSp: 'Samsung galaxy 7', gia: '1000', img: './img/sp_note7.png' },
]

export default class DemoProps extends Component {

    renderSanPham = () => {
        return mangSanPham.map((item, index) => {
            return <div className="col-4" key={index}>
                <SanPham sp={item}></SanPham>
            </div>
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* <div className="col-4">
                        <SanPham tenSp="Ipone" gia="20000" img="./img/sp_blackberry.png"></SanPham>
                    </div>
                    <div className="col-4">
                        <SanPham tenSp="Galaxy note 4" gia="30000" img="./img/sp_iphoneX.png"></SanPham>
                    </div>
                    <div className="col-4">
                    <SanPham tenSp="Sony experia Z76" gia="40000" img="./img/sp_note7.png"></SanPham>
                    </div> */}
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
