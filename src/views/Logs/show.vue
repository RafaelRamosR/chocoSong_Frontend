<template>
    <Authenticated>
        <ButtonBack :url="{name:'categories.index'}">
            <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                </svg>
            </template>
            Atras
            <template #title>
                Mostrar categoria
            </template>
        </ButtonBack>

        <Card>
            <form @submit.prevent="store" enctype="multipart/form-data" class="w-full">
                <div class="mt-5">
                    <LabelTitle value="Nombre"/>
                    <InputText type="text" disabled v-model="form.nombre" class="w-full mt-2" placeholder="Nombre"/>
                </div>
            </form>
        </Card>

        <BreezeLoading v-if="loading"/>

    </Authenticated>
</template>
<script>
import Card from '../../components/Card.vue'
import Textarea from '../../components/Textarea.vue' 
import InputText from '../../components/InputName.vue' 
import ButtonBack from '../../components/ButtonBack.vue'
import BreezeLoading from '../../components/Loading.vue'
import Authenticated from '../../layouts/Authenticate.vue'
import LabelTitle from '../../components/LabelSubTitleForms.vue'
import LabelTitleForms from '../../components/LabelTitleForms.vue'
import {categoriesServices} from '../../services/categoriesServices'

export default ({
    components:{
        Card,
        Textarea,
        InputText,
        ButtonBack,
        LabelTitle,
        BreezeLoading,
        Authenticated,
        LabelTitleForms
    },
    data(){
        return{
            form:{
                nombre:'',
                descripcion:'',
            },
            loading:true
        }
    },
    mounted(){
        categoriesServices.show(this.$route.params.id)
        .then((response)=>{
            this.form.nombre=response.data.nombre
            this.loading=false
        })
        .catch((error)=>{
            console.log(error)  
        })
    }
})
</script>
