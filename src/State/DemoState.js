import React, { Component } from 'react'

export default class DemoState extends Component {



    //thuộc tính state:
    //+ state là thuộc tính có sẵn của React Class Component
    //+ state là thuộc tính chứa các giá trị thay đổi khi người dùng thao tác event.
    state = {
        isLogin: false
    }

    // isLogin = false; //True là đã đăng nhập, false chưa đăng nhập
    userName = 'cybersoft';


    renderLogin = () => {
        if (this.state.isLogin) {
            return <a className="nav-link">Hello {this.userName}</a>;
        }

        return <button onClick={()=>{
            //Khi click vào button sẽ gọi hàm handleLogin
            this.handleLogin();
        }} className="nav-link bg-dark text-white">
            Đăng nhập
        </button>

    }

    //Hàm sẽ thực thi khi người dùng click vào nút đăng nhập
    handleLogin = () => {
        // this.state.isLogin = true;//Không được set giá trị trực tiếp cho state

        //this.setState() : Phương thức có sẵn của lớp đối tượng component dùng để gán lại giá trị mới cho state đồng thời render lại giao diện.


        // let newState = {
        //     isLogin: true
        // }

        //Tham số 1: là state với giá trị mới
        //Tham số 2: là hàm thực thi sau khi setState xử lý xong
        //setState là phương thức bất đồng bộ
        this.setState({
            isLogin: true
        })


    }


    render() {
        //Gõ b4-navbar-background -> html -> jsx
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                {this.renderLogin()}


                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

            </div>
        )
    }
}
