import React from 'react';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import List from '../Components/List';
import '../style/MainPage.css';

const MainPage = () => {
    return (
        <div className='main-container'>
            <Header />
            <div className='inner-container'>
                <SearchBar />
                {/* 헤더 제외 컴포넌트 넣으면 됨 */}
                <List/>
            </div>
        </div>
    );
};

export default MainPage;