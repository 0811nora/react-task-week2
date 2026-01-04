import axios from 'axios';

const apiUrl = 'https://ec-course-api.hexschool.io/v2';
const path = "noratest";

//登入API
export const postSignin = (data) =>{
    return axios.post(`${apiUrl}/admin/signin`,data);
}

// 驗證登入狀態
export const userCheck = (token) =>{
    return axios.post(`${apiUrl}/api/user/check`,{
        headers: {
            'Authorization': token
        }
    });
}


export const userLogout = (token) =>{
    return axios.post(`${apiUrl}/logout`,{},{
        headers: {
            'Authorization': token
        }
    });
}

// [adm]取得所有產品列表
export const getProducts = (token) =>{
    return axios.get(`${apiUrl}/api/${path}/admin/products/all`,{
        headers: {
            'Authorization': token
        }
    });
};

