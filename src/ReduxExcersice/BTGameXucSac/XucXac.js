import React, { Component } from 'react';
import {connect} from 'react-redux';

class XucXac extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <button className="btn btn-success d-flex" onClick={()=> {
                            this.props.datCuoc(true)
                        }}>
                            <span className="display-4 p-4">TÀI</span>
                        </button>
                    </div>
                    <div className="col-6 text-center">
                        {
                            this.props.mangXucXac.map((item, index) => {
                                return <img key={index} src={item.img} width="50" height="50" className="ml-2"/>
                            })
                        }
            
                    </div>
                    <div className="col-3">
                        <button className="btn btn-danger d-flex" onClick={()=> {
                            this.props.datCuoc(false)
                        }}>
                            <span className="display-4 p-4">XỈU</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangXucXac: state.BaiTapGameXucXacReducer.mangXucXac,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (isTai) => {
            const action = {
                type: 'CHOOSE_STATE_XX',
                datCuoc: isTai
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(XucXac);