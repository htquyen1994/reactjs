import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartModel extends Component {

    render() {
        console.log('props', this.props);
        return (
            <div className="modal fade" id="modelId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Cart</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    
                                    {this.renderCarts(this.props.cart)}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderCarts = (products) => {
        console.log('I am here', products)
        return products.map((item, index) => {
            return <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                    <img src={item.image} alt={item.name} height="70" width="70"></img>
                </td>
                <td>{item.price.toLocaleString()}</td>
                <td>
                    <button className="btn btn-success" onClick={()=>{
                        this.props.creaseQuantityProduct(item.id, 1)
                    }}>+</button>
                    <span className="m-2">{item.quantity}</span>
                    <button className="btn btn-success" onClick={()=>{
                        this.props.creaseQuantityProduct(item.id, -1)
                    }}>-</button>
                </td>
                <td>{(item.quantity * item.price).toLocaleString()}</td>
                <td>
                    <button className="btn btn-danger" onClick= {()=> {
                        this.props.xoaGioHang(item.id);
                    }}>Xoá giỏ hàng</button>
                </td>
            </tr>
        });
    }
}

// mapStateToProps: bien state tuwf reducer thanhf props cua component
const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSP) => {
            // Tao ra object gui len store
            const action = {
                type: 'DELETE_ITEM',
                payload: maSP,
            }
            console.log(maSP);
            // dispatch la function  redux  cung cap de dua du lieu len store
            dispatch(action);
            
        },

        creaseQuantityProduct: (maSP, soLuong) => {
            const action = {
                type: 'INCREASE_ENTITY',
                maSP,
                soLuong
            }

            dispatch(action);
        }
    }
}

// connect: Giup connect react component voi redux store
export default connect(mapStateToProps, mapDispatchToProps)(CartModel);
