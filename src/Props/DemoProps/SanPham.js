import React from 'react'

export default function SanPham(props) {
    const {ma, tenSp, img, gia} = props.sp;
    return (
        <div className="card text-white bg-primary">
            <img className="card-img-top" src={img} height="350">

            </img>

            <div className="card-body">
                <h4 className="card-title">{tenSp}</h4>
                <p className="card-text">{gia}</p>
            </div>
        </div>
    )
}
