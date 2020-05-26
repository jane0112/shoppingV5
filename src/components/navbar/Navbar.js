import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = (props) => {
    const logOutRef = React.createRef()
    const usernameRef = React.createRef()
    const logOut = () => {
        usernameRef.current.style.display = 'none'
        window.localStorage.removeItem('jwt_token')
        window.localStorage.removeItem('refresh_token')
        window.location.hash = '/login'
    }

    return (
        <div className="navbar" >
            <ul className="nav">
                <li className="navLink">
                    <Link to="/" className="active">Puducts</Link>
                </li>
                <li className="navLink logoutBtn" ref={logOutRef} onClick={logOut}>
                    <Link to="/login">
                        {props.isLoggedIn ? 'LogOut' : 'LogIn'}
                    </Link>
                </li>
                <li className="cartIcon" onClick={props.swapModal}>
                    <span className='username' ref={usernameRef}>{props.username}</span>
                    <span className="badge">
                        {props.productAmount}
                    </span>
                    <i className="fas fa-shopping-cart"></i>
                </li>

            </ul>
        </div >
    )
}

export default Navbar