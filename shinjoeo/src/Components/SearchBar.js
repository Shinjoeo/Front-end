import React from 'react';
import '../style/SearchBar.css';

const SearchBar = () => {
    const [search, setSearch] = useState("");

    /*검색어 결정*/
    const onChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    /* 검색 함수 */
    const searchClick = ()=>{
        //search 변수 이용해서 백엔드 통신?
        //검색돼서 나오는 데이터를 props로 item이나 list컴포넌트에 보내야할듯.
    }

    return (
        <div id="SearchBarDiv">
            <input placeholder='지금바로 신조어를 검색해 보세요' id="searchInput" type="text" value={search} onChange={onChange} />
            <img id="searchImg" onClick={searchClick} src='/search.jpg' alt='돋보기img' />
        </div>
    );
};

export default SearchBar;