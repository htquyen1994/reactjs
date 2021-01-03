import React, { Component } from 'react'
import {connect} from 'react-redux'

class KetQua extends Component {
    render() {
        return (
            <div className="container text-center mt-5">
                <div className="display-4">Bạn chọn: 
                    <span className="text-warning display-4"> {this.renderTaiXiu(this.props.banChon)}</span>

                </div>
                <div className="display-4">Số bàn thắng:  
                    <span className="text-success display-4"> {this.props.soBanThang}</span>

                </div>
                <div className="display-4">Tổng số bàn chơi: 
                    <span className="text-primary display-4"> {this.props.tongSoBanChoi}</span>

                </div>
            </div>
        )
    }

    renderTaiXiu(isTai) {
        return isTai? 'TÀI' : 'XỈU';
    }
}

// state đại diện cho rootReducer
const mapStateToProps = (state) => {
    return {
        banChon: state.BaiTapGameXucXacReducer.banChon,
        tongSoBanChoi: state.BaiTapGameXucXacReducer.tongSoBanChoi,
        soBanThang: state.BaiTapGameXucXacReducer.soBanThang,
    }
}

export default connect(mapStateToProps)(KetQua)
