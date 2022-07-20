import React from 'react';
import WriteForm from '../Components/WriteForm';
import Header from '../Components/Header';
import '../style/UploadPage.css'

const UploadPage = () => {
    return (
        <section className='main-container'>
            {/* <Header /> */}
            <WriteForm />
        </section>
    );
};

export default UploadPage;