import React, { Component } from 'react'
import ListProduct from './ListProduct'
import CartModel from './CartModel'

export default class Shop extends Component {
    render() {
        return (
            <div className="container">
                <button className="btn btn-success mb-2 mt-2" data-toggle="modal" data-target="#modelId">Cart</button>
                <ListProduct/>
                <CartModel/>
            </div>
        )
    }
}
