import React from 'react';
import '../style/Header.css';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Header = () => {
    const [login,setLogin] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    const REST_API_KEY = 'fad3300d7c33374e2bb2bab358bcbec3';
    const REDIRECT_URI = 'http://localhost:3000';
    const AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
   
    
    
    const Login = ()=>{
        console.log("click login");
        window.location.href=AUTH_URL; //카카오 로그인으로 이동
        console.log("test");
    };

    /*인가코드 발급*/
    useEffect(()=>{
        const KAKAO_CODE = location.search.split('=')[1];
        
        console.log(KAKAO_CODE);
        console.log("Test");
        navigate('/');
        console.log(KAKAO_CODE);
        axios.get(`/accounts/login/callback/?code=${KAKAO_CODE}`)
        .then((res) => {
            console.log(res.data);
            setLogin(login+1);
            localStorage.setItem('username', res.data.user_id);
            
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);
    

    const Logout = ()=>{
        console.log("click logout");
        setLogin(login-1);
        console.log(login);
        //로그 아웃 기능
    };
    
    useEffect(()=>{
        console.log("chage login");
    },[login])

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
                (login !== 1) ?
                <img id="kakaoImg" onClick={Login} src='/ShinjoeoImg/kakao.jpg' alt='카카오img' /> :
                <img id="LogoutImg" onClick={Logout} src='/ShinjoeoImg/logout.jpg' alt='로그아웃img' />
            }
            </div>
            
        </div>
    );
};

export default Header;