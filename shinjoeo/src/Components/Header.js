import React from 'react';
import '../style/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    const Login = ()=>{
        //카카오 로그인으로 이동
    }

    const Logout = ()=>{
        //로그 아웃 기능
    }

    return (
        <div id="HeaderDiv">
            <Link to='/'>
                <h1>신조어 도감</h1>
            </Link>
            
            <div>
            {
                (login != true) ?
                <img id="kakaoImg" onClick={Login} src='/kakao.jpg' alt='카카오img' /> :
                <img id="LogoutImg" onClick={Logout} src='/logout.jpg' alt='로그아웃img' />
            }
            </div>
        </div>
    );
};

export default Header;