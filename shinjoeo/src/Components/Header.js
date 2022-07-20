import React from 'react';
import '../style/Header.css';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

const Header = () => {
    const [login,setLogin] = useState(0);
    
    const Login = ()=>{
        console.log("click login");
        setLogin(login+1);
        //카카오 로그인으로 이동
    };

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