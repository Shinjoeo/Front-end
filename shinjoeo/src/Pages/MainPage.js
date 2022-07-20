import React from 'react';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import List from '../Components/List';
import '../style/MainPage.css';
import {useState} from 'react';

const MainPage = () => {

    const [isActiveNew, setIsActiveNew] = useState(true);
    const [isActivePopular, setIsActivePopular] = useState(false);

    const handleClickNew = ()=>{
        setIsActiveNew(!isActiveNew);
        setIsActivePopular(!isActivePopular);
    };
    const handleClickPopular = ()=>{
        setIsActivePopular(!isActivePopular);
        setIsActiveNew(!isActiveNew);
    };

    return (
        <div className='main-container'>
            <Header />

            <div className='inner-container'>
                <SearchBar />
                <div id="filterDiv">
                    <button type="button" className={isActiveNew ? 'dontClickBtn' : 'clickBtn'} onClick={handleClickNew}>최신순</button>
                    <button type="button" className={isActivePopular ? 'dontClickBtn' : 'clickBtn'} onClick={handleClickPopular}>인기순</button>
                </div>
                {/* 헤더 제외 컴포넌트 넣으면 됨 */}
                <List/>
            </div>
        </div>
    );
};

export default MainPage;