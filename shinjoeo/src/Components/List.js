import React, { useState, useEffect } from 'react';
import '../style/List.css';
import Items from './Items';

const List = () => {
    
    // 전체 신조어 저장하는 변수
    const [data, setData] = useState([]);

    // 첫 화면 로드 시 데이터 받아오기
    useEffect(() => {
        // axios로 받아와서 
        
        // 데이터를 하나의 변수에 전체 저장
        // setData();
    }, []);

    return (
        <section className='list-container'>
            {/* 데이터 개수만큼 item 컴포넌트 map 함수 돌리기 (props는 전체 데이터를 배열 개수만큼 순차적으로 받아서 넘겨주기)*/}
            <Items />
            <Items/>
            <Items/>
            <Items/>
        </section>
    );
};

export default List;