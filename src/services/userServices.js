import url from '../services/global'
import axios from 'axios'

export const userServices={
    getToken(){
        if (localStorage.getItem('token')) {
            return localStorage.getItem('token')
        }
    },
    index(){
        return axios({
            url:url.url+'usuarios',
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+this.getToken()
            }
        })
    },
    getUser(id){
        return axios({
            url:url.url+'usuarios/'+id,
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+this.getToken()
            }
        })  
    },
    show(){
        if (localStorage.getItem('token') && localStorage.getItem('identify')) {
            let datasUserAuthenticated=localStorage.getItem('identify')
        
            datasUserAuthenticated=JSON.parse(datasUserAuthenticated)

            return axios({
                url:url.url+'usuarios/'+datasUserAuthenticated.id,
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':'Bearer '+this.getToken()
                }
            })
        }
    },
    store(datos){
        return axios({
            url:url.url+'usuarios',
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+this.getToken()
            },
            data:datos
        })
    },
    register(datos){
        return axios({
            url:url.url+'register',
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            data:datos
        })
    },
    update(id,data){
        return axios({
            url:url.url+'usuarios/'+id,
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+this.getToken()
            },
            data:data
        })
    },
    delete(id){
        return axios({
            url:url.url+'usuarios/'+id,
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+this.getToken()
            }
        })
    },
    getDataUserAuthenticated(){
        let datos=[]
        if (localStorage.getItem('token') || localStorage.getItem('identify')) {
            datos=JSON.parse(localStorage.getItem('identify'))
        }
        return datos
    }

}