<template>
    <Authenticated>
        <div class="mx-3 py-3 items-center">
            <LabelTitleForms class="mb-4" value="Canciones"/>

            <div v-for="dato in datos" :key="dato.id" class=" bg-gray-900 py-2 rounded-md mb-3">
                <div class="flex px-3 mb-2 items-center">
                    <img :src="dato.usuario.url" class="rounded-full justify-start w-14 h-14 shadown-md mr-2" alt="">
                    <span v-text="dato.usuario.nombre+' '+dato.usuario.apellido" class="text-gray-100 font-semibold"></span>
                </div>
                <div class="w-full border-b shadow-md opacity-20"></div>

                <div class="px-3 mt-2">
                    <label class="text-gray-100 font-medium">Autor: 
                        <span v-text="dato.autor" class="text-gray-100 text-sm"></span> 
                    </label>
                </div>
                <div class="px-3">
                    <label class="text-gray-100 font-medium">Titulo: 
                        <span class="text-sm" v-text="dato.nombre"></span>
                    </label>
                    <div class="text-gray-100 py-4" v-text="dato.letra"></div>
                </div>
                <div class="px-3">
                    <audio :src="dato.url" controls class="bg-gray-900 w-full text-red-900"></audio>
                </div>
            </div>
            <BreezeLoading v-if="loading"/>
        </div>
    </Authenticated>
</template>
<script>
import { RouterLink } from 'vue-router'
import BreezeLoading from '../../components/Loading.vue'
import Authenticated from '../../layouts/Authenticate.vue'
import {cancionesServices} from '../../services/cancionesServices'
import LabelTitleForms from '../../components/LabelTitleForms.vue'
export default ({
    components:{
        RouterLink,
        BreezeLoading,
        Authenticated,
        LabelTitleForms,
    },
    data(){
        return{
            datos:[],
            loading:true,
        }
    },
    methods:{
       getCanciones(){
           cancionesServices.index()
           .then((response)=>{
               this.datos=response.data
               this.loading=false
           })
           .catch((error)=>{
               console.log(error)
               
           })
       }
    },
    mounted(){
        this.getCanciones()
    }
})
</script>