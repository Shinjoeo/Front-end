import React from 'react';
import '../style/SearchBar.css';
import { useState } from 'react';

const SearchBar = (props) => {
    const [searchValue,setSearchValue] = useState("");
    const {setSearchWord} = props;
    /*검색어 결정*/
    const onChange = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    }

    /* 검색 함수 */
    const searchClick = ()=>{

        setSearchWord(searchValue);
        setSearchValue('');
        //search 변수 이용해서 백엔드 통신?
        //검색돼서 나오는 데이터를 props로 item이나 list컴포넌트에 보내야할듯.
    }

    return (
        <div id="SearchBarDiv">
            <input placeholder='   지금바로 신조어를 검색해 보세요' id="searchInput" type="text" value={searchValue} onChange={onChange} />
            <input id="searchImg" type='image' onClick={searchClick} src='/ShinjoeoImg/search.jpg' alt='돋보기img'/>         
        </div>
    );
};

export default SearchBar;