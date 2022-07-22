import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/main');
        }, 2000);
    });

    return (
        <div>
            <div className='main-container'>
                <div className='inner-container'>
                    <img style={{width:'100%'}} src='/ShinjoeoImg/splashwithlogo.png' alt='이미지 없음'/>
                </div>
            </div>
        </div>
    );
};

export default SplashPage;