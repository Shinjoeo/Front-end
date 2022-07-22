import React from 'react';
import '../style/Header.css';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Header = ({login}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const REST_API_KEY = 'fad3300d7c33374e2bb2bab358bcbec3';
    const REDIRECT_URI = 'http://localhost:3000'; //백이랑 맞춰야함

    const AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
    
    const Login = ()=>{
        window.location.href=AUTH_URL; //카카오 로그인으로 이동
    };

    /*인가코드 발급*/
    useEffect(()=>{
        const KAKAO_CODE = location.search.split('=')[1];
        
        axios.get(`/accounts/login/callback/?code=${KAKAO_CODE}`)
        .then((res) => {
            console.log(res.data);
            localStorage.setItem('username', res.data.user_id); //name, AccessToken -> 로그인 인증
            localStorage.setItem('accessToken',res.data.access_token);
        })
        .catch((err) => {
            console.log(err);
        })

        
    },[]);

    


    
    const Logout = ()=>{
        console.log("click logout");
        localStorage.clear();
        window.location.href = 'http://ec2-54-180-8-2.ap-northeast-2.compute.amazonaws.com:8000/accounts/logout/';
        //로그 아웃 기능
    };
    

    return (
        <div id="HeaderDiv">
            <div className='HeaderDivSide'>

            </div>
            <div className='HeaderDivCenter'>
            <Link id="HeaderLogo" to='/'>
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