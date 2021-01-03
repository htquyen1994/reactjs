import React, { Component } from 'react'
import {connect} from 'react-redux'
 
class Product extends Component {
    
    render() {
        const {prod, addToCart} = this.props;
        return <div className="card text-center">
                <img className="card-img-top" src={prod.image} alt={prod.image}  height="270"/>
                <div className="card-body">
                    <h4 className="card-title">{prod.name}</h4>
                    <p className="card-text">{prod.price}</p>
                </div>

                <button className="btn btn-danger" onClick={() => {
                    addToCart({...prod, quantity: 1})
                }}>Add to cart</button>
        </div>
    }
}

// tao ra phuong thuc va chuyen no thanh props cua component de tien hanh dispatch len reducer
const mapDispatchToProp = (dispatch) => {
    return {
        addToCart: (product) => {
            // action: la mot obj gom type (De reducer nhan dien), payload: nhan du lieu can day len reducer
            const action = {
                type: 'ADD_TO_CART',
                payload: product
            };

            dispatch(action);

        }
    }
}

export default connect(null, mapDispatchToProp)(Product)
