import React,  {useState} from 'react';
import axios from 'axios';
import '../style/Items.css';

const Items = ({data, popular}) => {

    console.log(data);
    console.log(popular);
    const [toggle, setToggle] = useState(false)
    const toggleExplain = () => {
        setToggle(!toggle);
    }

    const [likeToggle, setLikeToggle] = useState(false);
    const body = {
        user_id : localStorage.getItem('user_id')
    }
    const heartToggle = () => {
        if(likeToggle == false) {
            setLikeToggle(!likeToggle);
            // axios.put('', body)
            //     .then((res) => alert("좋아요 성공 !")) // List에서 하트 갯수 받아 온 후 +1 하는 방식으로 로직 구현하기
            //     .catch((err) => alert("좋아요 실패 !"))
        } else {
            alert("한 번 누른 좋아요는 취소 할 수 없습니다 !")
        }
    }

    // 삭제 로직 : List에서 user_id를 받아와서 로컬의 값과 비교했을 때 일치하는 것만 쓰레기통 만들기.
    // 휴지통 누르면 axios Delete 보내기 
    const [trash, setTrash] = useState(true);


    const deletePost = () => {
        // axios.delete('')
        //     .then((res) => alert("글 삭제 완료 !"))
        //     .catch((err) => alert("글 삭제 실패 !"))
        alert("삭제 버튼 작동")
    }

    return (
        <section className='item-container'>
            <div id='rank'>1</div>
            <div id='word-info-box'>
                <div><br/>{data.word}</div>
                <div>{data.explain}</div>
            </div>
            <div id='main-btns'>
                <div>
                    {(likeToggle == false) ? <img className='btn' src='/ShinjoeoImg/unfillHeart.png' onClick={heartToggle}/> : <img className='btn' src='/ShinjoeoImg/fillHeart.png' onClick={heartToggle}/>}
                </div>
                <div>
                    &nbsp;{data.likeCnt}
                </div>
                <div>
                    {(toggle === false) ? (<img className='btn' src='/ShinjoeoImg/toggleDown.png' onClick={toggleExplain}/>) : (<img className='btn' src='/ShinjoeoImg/toggleUp.png' onClick={toggleExplain}/>)}
                </div>
            </div>
            <div className={(toggle == false) ? 'main-explain-none' : 'main-explain'}>
                    <p>{data.explain}</p>
            </div>
            <div id={(trash == true) ? 'trash' : 'trash-none'} onClick={deletePost}>
                <img className='trash' src='/ShinjoeoImg/trashcan.jpg' />
            </div>
        </section>
    );
};

export default Items;