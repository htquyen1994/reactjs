import React, { Component } from 'react'

export default class BTProduct extends Component {
    product = this.props.product;
    xemChiTiet = this.props.xemChiTiet;
    addCartProduct = this.props.addCartProduct;

    render() {
        return (
            <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                    <img className="card-img-top" 
                    src={this.product.hinhAnh} alt="Card image" style={{ maxWidth: '100%', height: 200 }} />
                    <div className="card-body text-center">
                        <h4 className="card-title text-center">{this.product.tenSp}</h4>
                        <p className="card-text">{this.product.gia}</p>
                        <div className="row">
                            <button type="button" className="btn btn-primary col-6" onClick={() => {
                                this.xemChiTiet(this.product)
                            }}>Chi tiết</button>
                            <button className="btn btn-danger col-6" onClick={()=> {
                                this.addCartProduct(this.product)
                            }}>Thêm giỏ hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
