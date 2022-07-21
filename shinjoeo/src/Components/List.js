import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/List.css';
import Items from './Items';

const List = (props) => {
    
    // 전체 신조어 저장하는 변수
    const [data, setData] = useState([]);
    const [url, setUrl] = useState("");
    const [isPopular, setIsPopular] = useState(false);

    // url 세팅 함수
    const makeUrl = () => {
        if(props.searchWord) {
            setUrl(`/main/list/?searchword=${props.searchWord}`);
        } else {
            if (props.sort === "new") {
                setUrl("/main/list");
            } else if (props.sort === "popular") {
                setUrl("/main/listbylike");
                setIsPopular(true);
            }
        }
    }

    // 첫 화면 로드 시 데이터 받아오기
    useEffect(() => {
        // 기본값은 최신순 정렬
        axios.get("/main/list/")
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
             alert("데이터를 불러오지 못했습니다.");
        })
    }, []);

    useEffect(() => {
        makeUrl();
    }, [props.searchWord, props.sort]);

    useEffect(() => {
        console.log(url);
        // 받은 url로 axios처리하면됨

        axios.get(`${url}`)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            alert("데이터를 불러오지 못했습니다.");
        })

    }, [url]);

    console.log(data);

    const passData = () => {
        const dataArr = [];
        data.map((ele) => {
            dataArr.push(<Items data={ele} popular={isPopular}/>);
        })
        console.log(dataArr);
        return dataArr;
    };

    return (
        <section className='list-container'>
            {/* 데이터 개수만큼 item 컴포넌트 map 함수 돌리기 (props는 전체 데이터를 배열 개수만큼 순차적으로 받아서 넘겨주기) */}
            {
                passData()
            }
        </section>
    );
};

export default List;