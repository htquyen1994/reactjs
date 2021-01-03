import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTProduct from './BTProduct'
import BTProductList from './BTProductList'
import Carousel from './Carousel'
import Footer from './Footer'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader />
                <Carousel />
                <BTProductList />
                <Footer />
            </div>
        )
    }
}
