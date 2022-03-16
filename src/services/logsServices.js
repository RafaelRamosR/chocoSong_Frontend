import axios from "axios"
import url from '../services/global'
import { userServices } from "./userServices"
export const logsServices={
    index(){
        return axios({
            url:url.url+'logs',
            method:'get',
            headers:{
                'Content-Type':'multipart/form-data',
                'Authorization':'Bearer '+userServices.getToken()
            },
        })
    },
}