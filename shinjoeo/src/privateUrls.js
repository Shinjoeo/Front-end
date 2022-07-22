const PROXY_BASE_URL = "http://shinjoeo.s3-website.ap-northeast-2.amazonaws.com";

const REST_API_KEY = 'fad3300d7c33374e2bb2bab358bcbec3';
const REDIRECT_URI = 'http://shinjoeo.s3-website.ap-northeast-2.amazonaws.com/callback'; //백이랑 맞춰야함
const AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export {
    PROXY_BASE_URL, AUTH_URL
}