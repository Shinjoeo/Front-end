import React from 'react';
import '../style/SearchBar.css';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {
    const [searchWord, setSearchWord] = useState("");
    const [searchParams,setSearchParams] = useSearchParams();

    /*검색어 결정*/
    const onChange = (e) => {
        e.preventDefault();
        setSearchWord(e.target.value);
    }

    /* 검색 함수 */
    const searchClick = ()=>{
        const search = (searchParams.get("search"));
        setSearchParams({search:search===searchWord ? searchWord:searchWord});
        console.log(searchWord);

        setSearchWord('');
        //search 변수 이용해서 백엔드 통신?
        //검색돼서 나오는 데이터를 props로 item이나 list컴포넌트에 보내야할듯.
    }

    return (
        <div id="SearchBarDiv">
            <input placeholder='지금바로 신조어를 검색해 보세요' id="searchInput" type="text" value={searchWord} onChange={onChange} />
            <img id="searchImg" onClick={searchClick} src='/ShinjoeoImg/search.jpg' alt='돋보기img' />            
        </div>
    );
};

export default SearchBar;