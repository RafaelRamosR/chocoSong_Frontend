import axios from "axios"
import url from '../services/global'

export const loginServices={
    login(datos){
        return axios({
            url:url.url+'login',
            method:'POST',
            headers:{
                'Content-Type':'multipart/form-data',
            },
            data:datos
        })
    }
}
