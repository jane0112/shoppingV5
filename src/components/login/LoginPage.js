import React from 'react'
import Navbar from '../navbar/Navbar'
import './Loginpage.css'
import axios from 'axios'



class LoginPage extends React.Component {

    constructor() {
        super()
        this.key = 'productInMyCart';
        this.errRef = React.createRef();
        this.loginTbRef = React.createRef();
        this.registerTbRef = React.createRef();
        this.registerFormRef = React.createRef();
        this.loginFormRef = React.createRef();
        this.state = {
            username: '',
            password: '',
            usernameR: '',
            passwordR: '',
            email: '',

        }

    };
    //control Login Form show and Login tab be active
    loginController = () => {
        this.loginFormRef.current.classList.replace('closeForm', 'showForm')
        this.loginTbRef.current.classList.add('tbActive')
        this.registerFormRef.current.classList.replace('showForm', 'closeForm')
        this.registerTbRef.current.classList.remove('tbActive')

    };

    //control Register Form show and Register tab be active
    RegisterController = () => {
        this.registerFormRef.current.classList.replace('closeForm', 'showForm')
        this.registerTbRef.current.classList.add('tbActive')
        this.loginFormRef.current.classList.replace('showForm', 'closeForm')
        this.loginTbRef.current.classList.remove('tbActive')
    };

    //Login form submit
    onLoginFormSubmit = (e) => {
        e.preventDefault();
        // this.onSubmit(this.state.username, this.state.password)
        var username = this.state.username;
        var password = this.state.password;
        var formdata = new FormData();
        formdata.append("username", username);
        formdata.append("password", password);

        // console.log(username, password)

        axios({
            method: 'post',
            url: 'https://djangorest-277405.uc.r.appspot.com/auth/jwt/create/',
            data: formdata,
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then((result) => {
            // console.log(result.data.access)
            alert(`Hello ${username}`)
            window.localStorage.setItem('jwt_token', result.data.access)
            window.localStorage.setItem('refresh_token', result.data.refresh)
            window.location.hash = "/"
        }).catch(err => {
            alert(err)
            this.errRef.current.innerText = '帳號或密碼錯誤，還是尚未註冊呢?'
        })
    }

    //registerForm submit
    onRegisterFormSubmit = (e) => {
        e.preventDefault();
        var username = this.state.usernameR;
        var password = this.state.passwordR;
        var email = this.state.email;
        var formdata = new FormData();
        formdata.append('username', username);
        formdata.append('email', email);
        formdata.append('password', password);
        axios({
            method: 'post',
            url: 'https://djangorest-277405.uc.r.appspot.com/auth/users/',
            data: formdata,
            headers: { 'Content-Type': 'multipart/form-data' }

        }).then(result => {
            alert('註冊成功')
            window.location.hash = '/login'

        }).catch(err => {
            if (err.response.data.username[0] === 'A user with that username already exists.') {
                alert(err.response.data.username[0])
            } else {
                alert(err.response)
            }
        })
    }

    render() {
        return (
            <div className="loginPage">
                <Navbar productAmount={0} username={this.state.username} />
                <div className="formContainer">
                    <div className="tab">
                        <button className="tabLink tbActive" onClick={this.loginController} ref={this.loginTbRef}>會員登入</button>
                        <button className="tabLink" ref={this.registerTbRef}
                            onClick={this.RegisterController}
                        >會員註冊</button>
                    </div>
                    <div className="form showForm" key={1} ref={this.loginFormRef}
                    >
                        <form className="loginForm" onSubmit={this.onLoginFormSubmit}>
                            <h1 className="loginTitle">會員登入</h1>
                            <div className="errText" ref={this.errRef}></div>
                            <label htmlFor="username">會員名稱</label>
                            <input
                                className="loginInput"
                                type="username"
                                id="username"
                                maxLength="10"
                                placeholder="輸入名稱"
                                onChange={e => { this.setState({ username: e.target.value }) }}
                                value={this.state.username}
                                required
                            />
                            <label htmlFor="password">密碼</label>
                            <input
                                className="loginInput"
                                id="password"
                                type="password"
                                minLength="6"
                                placeholder="輸入密碼"
                                onChange={e => { this.setState({ password: e.target.value }) }}
                                value={this.state.password}
                                required />
                            <button className="submitBtn">確認</button>
                        </form>
                    </div>
                    <div className="form closeForm" ref={this.registerFormRef} key={2}>
                        <form className="registerForm" onSubmit={this.onRegisterFormSubmit}>
                            <h1 className="registerTitle">會員註冊</h1>
                            <label htmlFor="username">會員名稱</label>
                            <input
                                className="registerInput"
                                type="username"
                                id="usernameR"
                                maxLength="10"
                                placeholder="輸入名稱"
                                value={this.state.usernameR}
                                onChange={e => { this.setState({ usernameR: e.target.value }) }}
                                required />

                            <label htmlFor="emailForRegister">Email</label>
                            <input
                                className="registerInput"
                                type="email"
                                id="emailForRegister"
                                placeholder="輸入Email"
                                value={this.state.email}
                                onChange={e => { this.setState({ email: e.target.value }) }}
                                required
                            />
                            <label htmlFor="passwordForRegister">密碼</label>
                            <input
                                className="registerInput"
                                type="password"
                                id="passwordForRegister"
                                placeholder="輸入密碼"
                                minLength="0"
                                value={this.state.passwordR}
                                onChange={e => { this.setState({ passwordR: e.target.value }) }}
                                required
                            />
                            <p>
                                試用帳號密碼
                                <br />
                                會員名稱 : guest1
                                <br />
                                密碼 : password2guest1
                            </p>
                            <button className="submitBtn">確認</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default LoginPage