import React from 'react';

const Callback = () => {
    // useEffect(()=> {
    //     let params = new URL(document.location.toString()).searchParams;
    //     let code = params.get("code"); // 인가코드 받는 부분
    //     let grant_type = location.search.split('=')[1];
    //     let client_id = "REST API 부분을 넣어준다.";
        
    
    //     axios.post(`https://kauth.kakao.com/oauth/token?
    //         grant_type=${grant_type}
    //         &client_id=${client_id}
    //         &redirect_uri=http://localhost:3000/oauth/callback/kakao
    //         &code=${code}`
    //         , {
    //     headers: {
    //         'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    //     }
    //   }).then((res) => {
    //       console.log(res)
    //       // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
    //   })
    //   }, [])
    return (
        <div>
            callback page
        </div>
    );
};

export default Callback;