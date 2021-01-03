import React, { Component } from 'react'
import XucXac from './XucXac'
import KetQua from './KetQua'
import BTGameXucSacCss from './BTGameXucXac.module.css';
import {connect} from 'react-redux'

class BTGameXucXac extends Component {
    render() {
        return (
            // <div style={{backgroundImage: 'url(./imgGame/bgGame.png)', position: 'fixed', width: '100%', height: '100%', top: 0, left: 0}}>
            //     <XucXac/>
            //     <KetQua/>
            // </div>

            <div className={`${BTGameXucSacCss['bgGame']}`}>
                <h1 className="display-4 text-center mt-5">BÀI TẬP GAME XÚC XẮC</h1>
                <XucXac/>
                <KetQua/>
                <div className="d-flex justify-content-center ">
                <button className="btn btn-success p-3" onClick={()=>{
                    this.props.playGame();
                }}>
                    PLAY GAME
                </button>
                </div>
                
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            const action = {
                type: 'PLAY_GAME'
            }

            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(BTGameXucXac);