import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/List.css';
import Items from './Items';

const List = (props) => {
    
    // 전체 신조어 저장하는 변수
    const [datas, setDatas] = useState([]);
    const [isPopular, setIsPopular] = useState(false);

    // 첫 화면 로드 시 데이터 받아오기
    useEffect(() => {
        // 기본값은 최신순 정렬
        axios.get("/main/list/")
        .then((res) => {
            setDatas(res.data);
        })
        .catch((err) => {
             alert("데이터를 불러오지 못했습니다.");
        })
    }, []);

    useEffect(() => {
        let url = '';
        console.log(props.searchWord);
        if(props.searchWord) {
            url = `/main/list/?searchword=${props.searchWord}`;
        } else {
            if (props.sort === "new") {
                url = "/main/list/";
                setIsPopular(false);
            } else if (props.sort === "popular") {
                url = "/main/listbylike/";
                setIsPopular(true);
            }
        }
        axios.get(`${url}`)
        .then((res) => {
            setDatas(res.data);
        })
        .catch((err) => {
            alert("데이터를 불러오지 못했습니다.");
        })
    }, [props.searchWord, props.sort]);

    // console.log(datas);

    return (
        <section className='list-container'>
            {/* 데이터 개수만큼 item 컴포넌트 map 함수 돌리기 (props는 전체 데이터를 배열 개수만큼 순차적으로 받아서 넘겨주기) */}
            {
                datas.map((ele, idx)=>{
                    return <Items data={ele} isPopular={isPopular} idx={idx+1} />;
                })
            }
        </section>
    );
};

export default List;