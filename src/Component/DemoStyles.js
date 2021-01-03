import React, { Component } from 'react'
//Cách 1 import css ảnh hưởng toàn ứng dụng
import './styles.css';
//Cách 2 import module css
import styleDemo from './DemoStyles.module.css';

export default class DemoStyles extends Component {
    render() {
        return (
            <div>
                <p className="pTextRed">ahihi</p>

                <p className={styleDemo.pTextGreen}>frontend 53e</p>
                
                <p className={styleDemo['pTextGreen']}>frontend 53e</p>


                <p className={`text-center ${styleDemo['pTextGreen']}`}>frontend 53e</p>

                {/* Phạm vi css ảnh hưởng trên thẻ */}
                <p style={{backgroundColor:'#000',color:'green',padding:'15px'}}> cybersoft fe 53E </p>
            </div>
        )
    }
}
