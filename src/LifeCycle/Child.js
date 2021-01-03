import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        console.log('render Child call');
        return (
            <div>
                I am component child
            </div>
        )
    }

    /**
     * @componentDidMount
     *  - Chạy sao render
     *  - Dùng để call API
     */
    componentDidMount() {
        console.log('ComponentDidMount Child call');
    }
}
