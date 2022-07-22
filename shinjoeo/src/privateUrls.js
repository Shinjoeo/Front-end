const PROXY_BASE_URL = "http://ec2-54-180-8-2.ap-northeast-2.compute.amazonaws.com:8000";

const REST_API_KEY = 'fad3300d7c33374e2bb2bab358bcbec3';
const REDIRECT_URI = 'http://localhost:3000/callback'; //백이랑 맞춰야함
const AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export {
    PROXY_BASE_URL, AUTH_URL
}