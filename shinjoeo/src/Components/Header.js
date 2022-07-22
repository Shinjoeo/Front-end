import React from 'react';
import '../style/Header.css';
import { Link } from 'react-router-dom';
import { AUTH_URL, PROXY_BASE_URL } from '../privateUrls.js';

const Header = ({login}) => {

    const Login = ()=>{
        window.location.href=AUTH_URL; //카카오 로그인으로 이동
    };
    
    const Logout = ()=>{
        console.log("click logout");
        localStorage.clear();
        window.location.href = `${PROXY_BASE_URL}/accounts/logout/`;
        //로그 아웃 기능
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
                <img id="kakaoImg" onClick={Login} src='/ShinjoeoImg/kakao.jpg' alt='카카오img' /> :
                <img id="LogoutImg" onClick={Logout} src='/ShinjoeoImg/logout.jpg' alt='로그아웃img' />
            }
            </div>
            
        </div>
    );
};

export default Header;