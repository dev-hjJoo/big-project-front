import { getCookie } from "./CookieContainer";

const getLoginState = () => !!getCookie('refreshToken');

export default getLoginState;