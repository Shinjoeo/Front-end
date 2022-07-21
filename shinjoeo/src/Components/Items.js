import React from 'react';
import '../style/Items.css';

const Items = () => {

    return (
        <section className='item-container'>
            <div id='rank'>1</div>
            <div id='word-info-box'>
                <div><br/>어쩔티비</div>
                <div>어쩌라고 가서 티비나 봐</div>
            </div>
            <div id='main-btns'>
                <div><img className='btn' src='/ShinjoeoImg/fillHeart.png'/></div>
                <div>&nbsp;20</div>
                <div><img className='btn' src='/ShinjoeoImg/toggleDown.png'/></div>
            </div>
        </section>
    );
};

export default Items;