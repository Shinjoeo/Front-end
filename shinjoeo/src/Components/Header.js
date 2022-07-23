import React from 'react';
import '../style/Header.css';
import { Link } from 'react-router-dom';
import { AUTH_URL, REST_API_KEY } from '../privateUrls.js';

const Header = ({login}) => {

    const Login = ()=>{
        window.location.href = AUTH_URL; //카카오 로그인으로 이동
    };
    
    const Logout = ()=>{
        localStorage.clear();
        window.location.href = `https://accounts.kakao.com/logout?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Flogout%2Fcallback%3Fclient_id%3D${REST_API_KEY}%26logout_redirect_uri%3Dhttp%3A%2F%2Fshinjoeo.s3-website.ap-northeast-2.amazonaws.com%2Fmain`;
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