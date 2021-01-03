import React, { Component } from 'react'
import Product from './Product'
import productList from './../../Data/productList.json';

export default class ListProduct extends Component {
    render() {
        return (
            <div className="row">
                {this.renderProduct()}
            </div>
        );
    }

    renderProduct = () => {
        // console.log(productList);
        return productList.map((item, index) => {
            return <div className="col-4" key={index}>
                <Product prod={item}  />
            </div>

        })
    }
}
