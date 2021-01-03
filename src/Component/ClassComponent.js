import React, { Component } from 'react'

export default class ClassComponent extends Component {
    
    
    showMessage() {
        return <div>
            abc
        </div>
    }
    
    //React class component nội dung hiển ra giao diện được chứa trong lệnh return của phương thức render

    render() {
        return (
            <div>
                <h3>React class component</h3>
            </div>
        )
    }
}
