import React, { Component } from 'react'

export default class EventBinding extends Component {

    handleClick = (title) => {
           //code xử lý click 
            //...
            alert("hello" + title);
    }
    render() {
        return (
            <div>
                <button onClick={()=> {
                    //Nội dung thực hiện khi người dùng click vào button
                    this.handleClick('cybersoft')          
              }}> Click </button>
            </div>
        )
    }
}

