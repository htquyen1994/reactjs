import React, { Component } from 'react'

export default class Databinding extends Component {

    //Thuộc tính sinh viên
    sinhVien = {
        ma: 1,
        ten: 'Nguyễn văn a',
        lop: 'FrontEnd53E',
        avatar: 'https://picsum.photos/200'
    }


    //Phương thức 
    renderCardSinhVien = (sv) => {
        return <div>
            <ul>
                <li>Mã sinh viên: {sv.ma}</li>
                <li>Tên sinh viên: {sv.ten}</li>
                <li>Lớp sinh viên: {sv.lop}</li>
            </ul>
        </div>
    }


    render() {
        const title = "cybersoft";
        const renderTitle = () => {
            //Xử lý ....
            //Nội dung trả về có thể là chuỗi hoặc số hoặc thẻ html (phải được bao phủ bởi 1 thẻ)
            return "Hello cybersoft";
        }
        const renderImg = () => {

            return <div>
                <img src="https://picsum.photos/200" />
            </div>
        }
        return (
            <div className="container">
                <p id="title">{title}</p>
                <h1>{renderTitle()}</h1>
                {renderImg()}
                <div className="w-25 card">
                    <div className="card-header">{this.sinhVien.ten}</div>
                    <div className="card-body">
                        <img src={this.sinhVien.avatar} style={{ width: '100%' }} />
                    </div>
                    <div className="card-footer">
                        {this.sinhVien.lop}
                    </div>
                </div>

                {this.renderCardSinhVien(this.sinhVien)}
            </div>
        )
    }
}
