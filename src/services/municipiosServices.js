import axios from "axios"
import url from '../services/global'
import { userServices } from "./userServices"
export const municipiosServices={
    index(){
        return axios({
            url:url.url+'municipios',
            method:'get',
            headers:{
                'Content-Type':'multipart/form-data',
                'Authorization':'Bearer '+userServices.getToken()
            },
        })
    },
    getMunicipios(id){
        return axios({
            url:url.url+'municipios/'+id,
            method:'get',
            headers:{
                'Content-Type':'multipart/form-data',
                'Authorization':'Bearer '+userServices.getToken()
            },
        })
    },
}