import axios from 'axios'
import {message} from 'antd'
import Label from "../components/util/label/Label";
import React from "react";


const api = (url, data = {},method = 'get') => {
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: url,
            data: data,
            params: method === 'get' ? data : {}
        }).then(res => {
            if (res.status === 200) {
                resolve(res.data)
            } else if (res.status > 200 && res.status < 300) {
                resolve(res.data);
                message.success(<Label value={res.data.code}/>)
            } else if (res.status > 300 && res.status < 400) {
                reject(res.data);
                message.error(res.data.code)
            } else if (res.status >= 400 && res.status < 500) {
                reject(res.data);
                message.error(res.data.code)
            } else {
                reject(res.data);
                message.error(res.data.code)
            }
        }).catch(error=>{
            reject(error);
        })
    })
};
export default api;

