import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import "../style/WriteForm.css"
import Header from './Header';

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

    const body = {
        user_id : localStorage.getItem('user_id'),
        word : word,
        explain : explain,
    }
    const goHome = () => {
        axios.post('', body)
            .then((res) => navigate('/'))
            .catch((error) => alert("등록에 실패하였습니다."))
        // navigate('/');
        // setWord("");
        // setExplain("");
    }

    return (
        <div className='main-container'>
            <Header />
            
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