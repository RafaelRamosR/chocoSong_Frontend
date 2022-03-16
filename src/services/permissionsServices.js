import axios from "axios"
import url from '../services/global'
import { userServices } from "./userServices"
export const permissionsServices={
    index(){
        return axios({
            url:url.url+'permisos',
            method:'get',
            headers:{
                'Content-Type':'multipart/form-data',
                'Authorization':'Bearer '+userServices.getToken()
            },
        })
    },
    show(id){
        return axios({
            url:url.url+'permisos/'+id,
            method:'get',
            headers:{
                'Content-Type':'multipart/form-data',
                'Authorization':'Bearer '+userServices.getToken()
            },
        })
    },
    update(id,datos){
        return axios({
            url:url.url+'permisos/'+id,
            method:'put',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+userServices.getToken()
            },
            data:datos
        })
    },
    store(datos){
        return axios({
            url:url.url+'permisos',
            method:'post',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+userServices.getToken()
            },
            data:datos
        })
    },
    delete(id){
        return axios({
            url:url.url+'permisos/'+id,
            method:'delete',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+userServices.getToken()
            },
        })
    }
}