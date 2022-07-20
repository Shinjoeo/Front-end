import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
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
    const goHome = () => {
        navigate('/');
        // setWord("");
        // setExplain("");
    }

    return (
        <>
            <div className='upload-header'>
                <Header />
            </div>

            <div className='upload-content'>
                <div className='word'>
                    <input className='wordinput' onChange={wordControl} value={word} placeholder="등록 할 신조어를 입력 해 주세요." />
                </div>
                <div className='explain'>
                    <textarea className='explaininput' onChange={explainControl} value={explain} placeholder="의미를 입력 해 주세요." />
                </div>
            </div>

            <div className='upload-btn'>
                <button className='uploadbtn' onClick={goHome}>신조어 등록하기</button>
            </div>
        </>
    );
}

export default WriteForm;