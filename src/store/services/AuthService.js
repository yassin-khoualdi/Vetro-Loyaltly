import HttpService from '../services/httpService';

export const LoginUser = (credentials, propsHistory) => {
    const http = new HttpService();
    //console.log(HttpService);
    let signUpUrl = "auth/login";
    return http.postData(credentials, signUpUrl).then(data => {
        console.log(JSON.stringify(data));
        return data;
    }).catch(error => console.log(error));
}