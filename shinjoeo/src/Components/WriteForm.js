import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import "../style/WriteForm.css"
import { PROXY_BASE_URL } from '../privateUrls';

const WriteForm = () => {

    const [word, setWord] = useState("");
    const [explain, setExplain] = useState("");

    const navigate = useNavigate();

    const wordControl = (e) => {
        setWord(e.target.value)
    }
    const explainControl = (e) => {
        setExplain(e.target.value)
    }
    
    const goHome = () => {
        
        let body = {
            create_user_id : localStorage.getItem('id'),
            word : word,
            explain : explain
        }

        axios.post(`${PROXY_BASE_URL}/main/newword/`, body)
            .then((res) => {
                alert("글 등록 완료 !")
                navigate('/')
            })
            .catch((error) => alert("등록에 실패하였습니다."))
    }

    return (
        <div className='main-container'>
            <div className='upload-content'>
                <div className='word'>
                    <input className='wordinput' onChange={wordControl} value={word} placeholder="등록 할 신조어를 입력 해 주세요." required />
                </div>
                <div className='explain'>
                    <textarea className='explaininput' onChange={explainControl} value={explain} placeholder="의미를 입력 해 주세요." required />
                </div>
            </div>

            <div className='upload-btn'>
                <button className='uploadbtn' onClick={goHome}>신조어 등록하기</button>
            </div>
        </div>
    );
}

export default WriteForm;