import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/SplashPage.css';
import {AUTH_URL} from '../privateUrls';

const SplashPage = () => {

    const navigate = useNavigate();

    const onClickMain = () => {
        navigate('/main');
    }

    const onClickLogin = () => {
        window.location.href = AUTH_URL;
    }
    

    return (
        <div>
            <div className='splash-container'>
            <div style={{height:"60px"}}></div>
                <div className='splash-logo'>
                    <div id='logo-text'>신조어 도감</div>
                </div>
                <div className='mobile-splash-logo'>
                    <div id='mobile-logo-text'>신조어 도감</div>
                </div>
                <div style={{height:"60px"}}></div>
                <button id='btn-not-login' onClick={onClickMain}>로그인 하지 않고 이동하기</button>
                <button id='btn-kakao' onClick={onClickLogin}><img src='/ShinjoeoImg/kakao_icon.png'/>&nbsp;&nbsp;카카오 로그인</button>
                <br/>
                <div id='made-by-text'>made by eojjeoltibi</div>
            </div>
        </div>
    );
};

export default SplashPage;