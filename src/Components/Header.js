import React from 'react';
import '../style/Header.css';
import { Link } from 'react-router-dom';
import { AUTH_URL, PROXY_BASE_URL } from '../privateUrls.js';

const Header = ({login}) => {

    const Login = ()=>{
        window.location.href = AUTH_URL; //카카오 로그인으로 이동
    };
    
    const Logout = ()=>{
        localStorage.clear();
        window.location.href = `${PROXY_BASE_URL}/accounts/logout/`;
    };
    

    return (
        <div id="HeaderDiv">
            <div className='HeaderDivSide'>

            </div>
            <div className='HeaderDivCenter'>
                <Link id="HeaderLogo" to='/main'>
                    <h1>신조어 도감</h1>
                </Link>
            </div>
            <div className='HeaderDivSide'>
            {
                (!login) ?
                <span id="kakaoImg" onClick={Login}>로그인</span> :
                <span id="LogoutImg" onClick={Logout}>로그아웃</span>
            }
            </div>
            
        </div>
    );
};

export default Header;