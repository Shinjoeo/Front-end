import React,  {useState} from 'react';
import '../style/Items.css';

const Items = () => {

    const [toggle, setToggle] = useState(false)
    const toggleExplain = () => {
        setToggle(!toggle);
    }

    const [likeToggle, setLikeToggle] = useState(false);
    const heartToggle = () => {
        setLikeToggle(!likeToggle);
    }


    return (
        <section className='item-container'>
            <div id='rank'>1</div>
            <div id='word-info-box'>
                <div><br/>어쩔티비</div>
                <div>어쩌라고 가서 티비나 봐</div>
            </div>
            <div id='main-btns'>
                <div>
                    {(likeToggle == false) ? <img className='btn' src='/ShinjoeoImg/unfillHeart.png' onClick={heartToggle}/> : <img className='btn' src='/ShinjoeoImg/fillHeart.png' onClick={heartToggle}/>}
                </div>
                <div>
                    &nbsp;20
                </div>
                <div>
                    {(toggle === false) ? (<img className='btn' src='/ShinjoeoImg/toggleDown.png' onClick={toggleExplain}/>) : (<img className='btn' src='/ShinjoeoImg/toggleUp.png' onClick={toggleExplain}/>)}
                </div>
            </div>
            <div className={(toggle == false) ? 'main-explain-none' : 'main-explain'}>
                    <p>어쩌라고 가서 티비나 봐</p>
            </div>
        </section>
    );
};

export default Items;