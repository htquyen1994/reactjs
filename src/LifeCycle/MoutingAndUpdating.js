import React, { Component } from 'react'
import Child from './Child';

export default class MoutingAndUpdating extends Component {

    /**
     * Kế thừa props;
     * Khởi tạo state;
     */
    constructor() {
        super();
        console.log('Constructor call')
        this.state = {
            age: 0,
        }
    }

    render() {
        console.log('render call');
        return (
            <div>
                <h1>Mouting And Updating</h1>
                <p>Tuổi của bạn là : {this.state.age}</p>
                <Child/>
                <button className="btn btn-info" onClick={()=>{
                    const age = this.state.age + 1;
                    this.setState({age})
                }}>Tăng tuổi</button>
            </div>
        )
    }

    /**
     * @componentDidUpdate
     *  - Chạy: Sau render và chạy trong quá trình updating
     *  - Usecase: Dung để call api
     */
    componentDidUpdate() {
        console.log('ComponentDidUpdate call');
    }


    /**
     * @componentDidMount
     *  - Chạy sao render
     *  - Dùng để call API
     */
    componentDidMount() {
        console.log('ComponentDidMount call');
    }

    static getDerivedStateFromProps(props, state) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

}
