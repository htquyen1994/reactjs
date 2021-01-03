import React, { Component } from 'react'
import MoutingAndUpdating from './MoutingAndUpdating'
import Unmouting from './Unmouting';

export default class LifeCycle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isShow: true,
        }
    }


    /**
     * @render
     *  - Chạy khi setState, props mới
     *  - Tạo React DOM
     *  
     */
    render() {
        console.log('Render call');
        return (
            <div>
                <MoutingAndUpdating />


                <button className="btn btn-info mt-5" onClick={() => {
                    this.setState({ isShow: !this.state.isShow })
                }}>Show Unmouting Component</button>

                {this.state.isShow ? <Unmouting /> : null}
            </div>
        )
    }


}
