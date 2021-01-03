import React, { Component } from 'react'

export default class Cart extends Component {

    thaydoiSlSanPham = this.props.thaydoiSlSanPham;
    xoaSanPhamGioHang = this.props.xoaSanPhamGioHang;
    saveCartProduct = this.props.saveCartProduct;
    render() {
        return (
            <div>
                <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Mã SP</th>
                                            <th>Tên SP</th>
                                            <th>Hình Ảnh</th>
                                            <th>Số Lượng</th>
                                            <th>Giá Bán</th>
                                            <th>Thành Tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderGioHang()}
                                    </tbody>
                                </table>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={()=>{
                                    this.saveCartProduct();
                                }}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderGioHang = () => {
        return this.props.gioHang?.map((item, index) => {
            return <tr key={index}>
                <td>{item.maSP}</td>
                <td>{item.tenSP}</td>
                <td>
                    <img src={item.hinhAnh} width="50" height="50"></img>
                </td>
                <td>
                    <button className="btn btn-primary" onClick={()=> {
                        this.thaydoiSlSanPham(item, true)
                    }}>+</button>
                    {item.soLuong}
                    <button className="btn btn-primary" onClick={()=> {
                        this.thaydoiSlSanPham(item, false)
                    }}>-</button>
                </td>
                <td>{item.giaBan}</td>
                <td>{(item.giaBan * item.soLuong).toLocaleString()}</td>
                <td>
                    <button className="btn btn-danger" onClick= {() => {
                        this.xoaSanPhamGioHang(item)
                    }}>Xoá</button>
                </td>
            </tr>
        })
    }
}
