import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Callback = () => {

    const location = useLocation();
    const navigate = useNavigate();
   
    /*인가코드 발급*/
    useEffect(()=>{
        const KAKAO_CODE = location.search.split('=')[1];
        
        // 백한테 넘겨줌
        axios.get(`/accounts/login/callback/?code=${KAKAO_CODE}`)
        .then((res) => {
            localStorage.setItem('username', res.data.user_id); //name, AccessToken -> 로그인 인증
            localStorage.setItem('accessToken',res.data.access_token);
            localStorage.setItem('id',res.data.id);
            navigate('/main');
        })
        .catch((err) => {
            console.log(err);
        })

        
    },[]);

    return (
        <div>
            <img src='/ShinjoeoImg/splashwithlogo.png' alt='이미지 없음'/>
        </div>
    );
};

export default Callback;