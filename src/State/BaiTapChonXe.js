import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    //state chứa giá trị thay đổi trên giao diện khi người dùng thao tác
    state = {
        imgSrc: './img/imgCar/imgBlackCar.jpg' //Giá trị ban đầu
    }

    changeColor = (color) => {
        this.setState({
            imgSrc: `./img/imgCar/img${color}Car.jpg`
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center display-4">Bài tập chọn màu xe</h1>
                <div className="row">
                    <div className="col-6">
                        <img style={{width:'100%'}} src={this.state.imgSrc} />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                <button onClick={()=>{
                                    this.changeColor('Red');
                                }} style={{color:'#fff',backgroundColor:'red'}}>Red color</button>
                            </div>
                            <div className="col-4">
                                <button onClick={()=>{
                                    this.changeColor('Silver');

                                }} style={{color:'#fff',backgroundColor:'silver'}}>Silver color</button>
                            </div>
                            <div className="col-4">
                                <button onClick={()=>{
                                    this.changeColor('Black');
                                }} style={{color:'#fff',backgroundColor:'black'}}>Black color</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
