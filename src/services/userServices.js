import url from '../services/global'
import axios from 'axios'

export const userServices={
    getToken(){
        if (localStorage.getItem('token')) {
            return localStorage.getItem('token')
        }
    },

    getUser(){
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
    getUsers(){

    },
    updateUser(id,data){
        return axios({
            url:url.url+'usuarios/'+id,
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+this.getToken()
            },
            data:data
        })
    }

}