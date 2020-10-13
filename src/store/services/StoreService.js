import HttpService from '../services/httpService';

export const CreateNewStore = (credentials) => {
    const http = new HttpService();
    //console.log(HttpService);
    let newStore = "store?api_token=PFeTyvkADcrAKyqow0zPLM3mExNRapf3";
    credentials.token = localStorage.getItem('user');
    return http.postData(credentials, newStore).then(data => {
        console.log(data);
        console.log(JSON.stringify(data));
        return data;
    }).catch((error) => {
        console.log(error)
    });
}

export const loadStores = (page) => {
    let token = localStorage.getItem('user');
    let storesDataUrl;
    storesDataUrl = "store/all/GXV0D2kp69mQ9OYn8yBoz7?api_token=PFeTyvkADcrAKyqow0zPLM3mExNRapf3";
    const http = new HttpService();
    return http.getData(storesDataUrl).then((data) => {
        console.log(data);
        return data
    }).catch((error) => {
        console.log(error)
    });
}