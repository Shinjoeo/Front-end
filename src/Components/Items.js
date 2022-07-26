import React,  { useState} from 'react';
import '../style/Items.css';
import axios from 'axios';
import {PROXY_BASE_URL} from '../privateUrls.js';
import { useMediaQuery } from "react-responsive";


const Items = (props) => {
    const smalltext = useMediaQuery({
        query: '(max-width: 300px)'
    });

    const middletext = useMediaQuery({
        query: '(min-width: 300px) and (max-width: 400px)'
    });

    const bigtext = useMediaQuery({
        query: '(min-width: 400px) and (max-width: 500px)'
    });

    const [count, setCount] = useState(props.data.likeCnt);
    const [toggle, setToggle] = useState(false)
    const toggleExplain = () => {
        setToggle(!toggle);
    }

    const [likeToggle, setLikeToggle] = useState(false);
    const heartToggle = () => {
        if(likeToggle === false) {
            axios.post(`${PROXY_BASE_URL}/main/newword/${props.data.id}/${localStorage.getItem('username')}`)
            .then((res) => {
                setLikeToggle(true);
                setCount(count+1);
            })
            .catch((err) => {
                 alert("실패");
            })
            
        } else {
            alert("한 번 누른 좋아요는 취소 할 수 없습니다 !")
        }
    }

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
            <div id='rank'>{ props.isSearch ? '' : (props.isPopular ? props.idx : ( props.idx<=3 ? <span id='new'>신규</span> : ''))}</div>
            <div id='word-info-box'>
                <div><br/>{props.data.word}</div>
                <div>
                {
                    smalltext && props.data.explain.length > 10 ? 
                    props.data.explain.substr(0,10)+"..." : 
                    (
                        middletext && props.data.explain.length > 12 ?
                        props.data.explain.substr(0,12)+"..." : 
                        (
                            bigtext && props.data.explain.length > 18 ?
                            props.data.explain.substr(0,18)+"..." : props.data.explain
                        )
                    )
                }
                </div>
            </div>
            <div id='main-btns'>
                {
                (localStorage.getItem('id'))?
                <div>
                    {(likeToggle === false) ? 
                    (((props.data.like_user_ids).includes(parseInt(localStorage.getItem('id'))))
                    ? <img alt='이미지 없음' className='btn' src='/ShinjoeoImg/fillHeart.png' onClick={heartToggle}/> 
                    : <img alt='이미지 없음' className='btn' src='/ShinjoeoImg/unfillHeart.png' onClick={heartToggle}/>) 
                    : <img alt='이미지 없음' className='btn' src='/ShinjoeoImg/fillHeart.png' onClick={heartToggle}/>}
                </div>:
                <div>
                    <img alt='이미지 없음' className='btn' src='/ShinjoeoImg/unfillHeart.png' onClick={()=> alert('좋아요는 로그인 후 가능합니다 !')}/>
                </div> 
                }

                <div>
                    &nbsp;{count}
                </div>
                <div>
                    {(toggle === false) ? (<img alt='이미지 없음' className='btn' src='/ShinjoeoImg/toggleDown.png' onClick={toggleExplain}/>) : (<img alt='이미지 없음' className='btn' src='/ShinjoeoImg/toggleUp.png' onClick={toggleExplain}/>)}
                </div>
            </div>
            <div className={(toggle === false) ? 'main-explain-none' : 'main-explain'}>
                <p>{props.data.explain}</p>
            </div>
            {
                (parseInt(localStorage.getItem('id'))===props.data.create_user_id)?
                <div id='trash' onClick={deletePost}>
                    <img alt='이미지 없음' className='trash' src='/ShinjoeoImg/trashcan.jpg' />
                </div>
                :""
            }
        </section>
    );
};

export default Items;