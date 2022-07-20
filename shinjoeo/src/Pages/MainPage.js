import React from 'react';
import Header from '../Components/Header';
import List from '../Components/List';
import '../style/MainPage.css';

const MainPage = () => {
    return (
        <div className='main-container'>
            <div className='inner-container'>
                {/* 헤더 제외 컴포넌트 넣으면 됨 */}
                <List/>
            </div>
        </div>
    );
};

export default MainPage;