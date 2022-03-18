import axios from "axios"
import url from '../services/global'
import { userServices } from "./userServices"
export const cancionesServices={
    index(){
        return axios({
            url:url.url+'canciones/',
            method:'GET',
            headers:{
                'Content-Type':'multipart/form-data',
                'Authorization':'Bearer '+userServices.getToken()
            }
        })
        .catch((error)=>{
            if (error.request.status==401) {
                localStorage.removeItem('token')
                localStorage.removeItem('idenfify')
                window.location('/login')
            }
        })
    },
    create(datos){
        return axios({
            url:url.url+'canciones/',
            method:'post',
            headers:{
                'Content-Type':'multipart/form-data',
                'Authorization':'Bearer '+userServices.getToken()
            },
            data:datos
        })
    },
    getByUser(id){
        return axios({
            url:url.url+'canciones/author/'+id,
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+userServices.getToken()
            }
        })
    },


}