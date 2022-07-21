import React from 'react';
import WriteForm from '../Components/WriteForm';
import Header from '../Components/Header';
import '../style/UploadPage.css'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
    const [login,setLogin] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        (localStorage.getItem('username'))?setLogin(true):setLogin(false)
        
    },[])
    

    return (
        <section className='main-container'>
            <Header login={login} />   
            <WriteForm />
        </section>
    );
};

export default UploadPage;