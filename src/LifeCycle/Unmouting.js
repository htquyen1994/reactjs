import React, { Component } from 'react'

export default class Unmouting extends Component {

    
    render() {
        return (
            <div>
                <h1>Unmouting</h1>
            </div>
        )
    }


    /**
     * @componentWillUnmount
     *  - Chạy sao render
     *  - Dùng để call API
     */
    componentWillUnmount() {
        console.log('componentWillUnmount call');
    }
}
