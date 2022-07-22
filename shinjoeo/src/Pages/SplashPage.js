import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/main');
        }, 3000);
    });

    return (
        <div>
            <div className='main-container'>
                <div className='inner-container'>
                    <img src='/ShinjoeoImg/splashwithlogo.png' alt='이미지 없음'/>
                </div>
            </div>
        </div>
    );
};

export default SplashPage;