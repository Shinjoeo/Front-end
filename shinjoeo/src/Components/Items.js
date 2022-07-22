import React,  {useState} from 'react';
import '../style/Items.css';
import {PROXY_BASE_URL} from '../privateUrls.js';

const Items = (props) => {

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
        if (window.confirm("정말 삭제합니까?")) {
            fetch(`${PROXY_BASE_URL}/main/newword/${props.data.id}/`, { method: 'DELETE' })
            .then(() => window.location.reload());
            alert("삭제되었습니다.");
          } else {
            alert("취소합니다.");
          }
    }

    return (
        <section className='item-container'>
            <div id='rank'>1</div>
            <div id='word-info-box'>
                <div><br/>{props.data.word}</div>
                <div>{props.data.explain}</div>
            </div>
            <div id='main-btns'>
                <div>
                    {(likeToggle == false) ? <img className='btn' src='/ShinjoeoImg/unfillHeart.png' onClick={heartToggle}/> : <img className='btn' src='/ShinjoeoImg/fillHeart.png' onClick={heartToggle}/>}
                </div>
                <div>
                    &nbsp;{props.data.likeCnt}
                </div>
                <div>
                    {(toggle === false) ? (<img className='btn' src='/ShinjoeoImg/toggleDown.png' onClick={toggleExplain}/>) : (<img className='btn' src='/ShinjoeoImg/toggleUp.png' onClick={toggleExplain}/>)}
                </div>
            </div>
            <div className={(toggle == false) ? 'main-explain-none' : 'main-explain'}>
                <p>{props.data.explain}</p>
            </div>
            {
                (parseInt(localStorage.getItem('id'))===props.data.create_user_id)?
                <div id={(trash == true) ? 'trash' : 'trash-none'} onClick={deletePost}>
                    <img className='trash' src='/ShinjoeoImg/trashcan.jpg' />
                </div>
                :""
            }
        </section>
    );
};

export default Items;