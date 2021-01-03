import React, { Component } from 'react'

const mangSinhVien = [
    { ma: 1, ten: 'Nguyễn Văn A', avatar: 'https://picsum.photos/50' },
    { ma: 2, ten: 'Nguyễn Văn B', avatar: 'https://picsum.photos/50' },
    { ma: 3, ten: 'Nguyễn Văn C', avatar: 'https://picsum.photos/50' },
]
export default class RenderWithMap extends Component {

    renderTable = () => {
        // const mangTrSinhVien = []; // [<tr>123</tr>,<tr>2313</tr>]
        // for (let index = 0; index < mangSinhVien.length; index++) {
        //     //Mỗi lần duyệt lấy ra 1 đối tượng sinh viên
        //     let sinhVien = mangSinhVien[index];
        //     //tạo ra thẻ jsx Tr sinh viên
        //     let jsxTr = <tr key={index}>
        //         <td>{sinhVien.ma}</td>
        //         <td>{sinhVien.ten}</td>
        //         <td><img src={sinhVien.avatar} /></td>
        //     </tr>;
        //     //push đối tượng vào mangTr
        //     mangTrSinhVien.push(jsxTr);
        // }
        const mangTrSinhVien = mangSinhVien.map((sinhVien, index) => {
            return <tr key={index}>
                <td>{sinhVien.ma}</td>
                <td>{sinhVien.ten}</td>
                <td><img src={sinhVien.avatar} /></td>
            </tr>
        })

        return mangTrSinhVien;
    }
    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã</th>
                            <th>Tên</th>
                            <th>Hình ảnh</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
