import React from 'react';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import List from '../Components/List';
import '../style/MainPage.css';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'

const MainPage = () => {
    const [searchWord, setSearchWord] = useState("");
    const navigate = useNavigate();
    const goUpload = () => {
        navigate('/upload');
        // setWord("");
        // setExplain("");
    }


    const [isActiveNew, setIsActiveNew] = useState(true);
    const [isActivePopular, setIsActivePopular] = useState(false);

    const handleClickNew = ()=>{
        if(!isActiveNew){
            setIsActiveNew(!isActiveNew);
            setIsActivePopular(!isActivePopular);
        }
        
    };
    const handleClickPopular = ()=>{
        if(!isActivePopular){
            setIsActiveNew(!isActiveNew);
            setIsActivePopular(!isActivePopular);
        }
    };

    return (
        <div className='main-container'>
            <Header />

            <div className='inner-container'>
                <SearchBar setSearchWord={setSearchWord} />
                
                <div id="filterDiv">
                    <button type="button" className={isActiveNew ? 'dontClickBtn' : 'clickBtn'} onClick={handleClickNew}>최신순</button>
                    <button type="button" className={isActivePopular ? 'dontClickBtn' : 'clickBtn'} onClick={handleClickPopular}>인기순</button>
                </div>
                {/* 헤더 제외 컴포넌트 넣으면 됨 */}
                {console.log(searchWord)}
                <List searchWord={searchWord} />
            </div>

            <div className='home-btn'>
                <button className='homebtn' onClick={goUpload}>신조어 등록하기</button>
            </div>

        </div>
    );
};

export default MainPage;