<template>
    <div class="w-full min-h-screen bg-black-200">
        <ButtonBack :url="{name:'home'}">
            <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                </svg>
            </template>
            Atras
            <template #title>
                Mis publicaciones
            </template>
        </ButtonBack>

        <Card>
            <div class="items-center mt-2">
                <div v-for="dato in datos" :key="dato.id" class=" bg-gray-900 py-2 rounded-md mb-3">
                   

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
        </Card>
        <CreateCancion @click="redirect()"/>
    </div>
</template>
<script>
import Card from '../../components/Card.vue'
import ButtonBack from '../../components/ButtonBack.vue'
import BreezeLoading from '../../components/Loading.vue'
import Authenticate from '../../layouts/Authenticate.vue'
import {userServices} from '../../services/userServices'
import CreateCancion from '../../components/CreateCancion.vue'
import LabelTitleForms from '../../components/LabelTitleForms.vue'
import {cancionesServices} from '../../services/cancionesServices'
export default ({
    components:{
        Card,
        ButtonBack,
        Authenticate,
        CreateCancion,
        BreezeLoading,
        LabelTitleForms,
    },
    data(){
        return{
            datos:[],
            loading:true,
        }
    },
    methods:{
        redirect(){
            this.$router.push({name:'publications.create'})
        }
    },
    mounted(){
        let datos=userServices.getDataUserAuthenticated()
        cancionesServices.getByUser(datos.id)
        .then((response)=>{
            this.datos=response.data
            this.loading=false

        })
        .catch((error)=>{
            console.log(error)
        })
    }
})
</script>
