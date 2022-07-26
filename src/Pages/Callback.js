import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import {PROXY_BASE_URL} from '../privateUrls.js';

const Callback = () => {

    const location = useLocation();
    const navigate = useNavigate();
   
    
    useEffect(()=>{
        const KAKAO_CODE = location.search.split('=')[1];
        
        // 백한테 넘겨줌
        axios.get(`${PROXY_BASE_URL}/accounts/login/callback/?code=${KAKAO_CODE}`)
        .then((res) => {
            localStorage.setItem('username', res.data.user_id); //name, AccessToken -> 로그인 인증
            localStorage.setItem('accessToken',res.data.access_token);
            localStorage.setItem('id',res.data.id);
            window.location.href = 'http://shinjoeo.s3-website.ap-northeast-2.amazonaws.com/main';
        })
        .catch((err) => {
            console.log(err);
        })

        
    },[]);

    return (
        <div>
            {/* <img src='/ShinjoeoImg/splashwithlogo.png' alt='이미지 없음'/> */}
        </div>
    );
};

export default Callback;