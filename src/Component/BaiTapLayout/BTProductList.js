import React, { Component } from 'react'
import BTProduct from './BTProduct'

export default class BTProductList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    <div className="col-3">
                        <BTProduct />
                    </div>
                    <div className="col-3">
                        <BTProduct />
                    </div>
                    <div className="col-3">
                        <BTProduct />
                    </div>
                    <div className="col-3">
                        <BTProduct />
                    </div>
                </div>

            </div>
        )
    }
}
